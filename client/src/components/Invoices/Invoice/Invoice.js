import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './Invoice.css';
// import '../../../scss/styles.sass';

export const Invoice = (props) => {
  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate('/view-invoice');
  };

    // GET request using axios inside useEffect React hook
    try {
      useEffect(() => {axios.get('http://127.0.0.1:5000/api/v1/invoices')
      .then(response => console.log(response));
}, []); 
    } catch (error) {
      console.log(error)
    }
    
const changeColor = () => {
    let className = ''
    if (props.status === 'Paid') {
        className = 'status-paid'
    }
    else if (props.status === 'Pending') {
        className = 'status-pending'
    }
    else {
        className = 'status-draft'
    }
    return className;
}
  
    return (
      <>
        <div className='invoice' onClick = {viewInvoice}>
          <div className='invoice-left-section'>
            <span className='id'><span id='hashtag'>#</span>{props.id}</span>
            <span id='date'>Due {props.date}</span>
            <span className='name'>{props.name}</span>
          </div>
          <div className='invoice-right-section'>
            <span className='amount'>&#163;{props.amount}</span>
            <span id='status' className={changeColor(props.status)}>{props.status}</span>
          </div>
        </div>

        <div className='invoice-mobile' onClick = {viewInvoice}>
          <div className='invoice-left-section-mobile'>
            <span className='id'><span id='hashtag'>#</span>{props.id}</span>
            <span className='name'>{props.name}</span>
          </div>
          <div className='invoice-right-section-mobile'>
            <div className='id-mobile'>
              <span id='date'>Due {props.date}</span>
              <span className='amount'>&#163;{props.amount}</span>
            </div>
            <span className={changeColor(props.status)}>{props.status}</span>
          </div>
        </div>
      </>
        
    )
}

export default Invoice;