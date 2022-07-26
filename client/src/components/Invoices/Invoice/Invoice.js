import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Invoice.css';
// import '../../../scss/styles.sass';

export const Invoice = (props) => {
  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate('/view-invoice');
  };

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
            <span id='name'>{props.name}</span>
          </div>
          <div className='invoice-right-section'>
            <span className='amount'>&#163;{props.amount}</span>
            <span className={changeColor(props.status)}>{props.status}</span>
          </div>
        </div>

        <div className='invoice-mobile' onClick = {viewInvoice}>
          <div className='invoice-left-section-mobile'>
            <span className='id'>{props.id}</span>
            <span>{props.name}</span>
          </div>
          <div className='invoice-right-section-mobile'>
            <div className='id-mobile'>
              <span>Due {props.date}</span>
              <span className='amount'>&#163;{props.amount}</span>
            </div>
            <span className={changeColor(props.status)}>{props.status}</span>
          </div>
        </div>
      </>
        
    )
}

export default Invoice;