import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Invoice.css';

const Invoice = (props) => {
  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate('/view-invoice');
  };
  
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
            <span className='status'>{props.status}</span>
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
            <span className='status'>{props.status}</span>
          </div>
        </div>
      </>
        
    )
}

export default Invoice;