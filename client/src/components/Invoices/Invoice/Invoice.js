import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Invoice.css';

const Invoice = (props) => {
  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate('/view-invoice', {replace: true});
  };

    return (
        <div className='invoice' onClick = {viewInvoice}>
          <div className='invoice-left-section'>
            <span className='id'>{props.id}</span>
            <span>Due {props.date}</span>
            <span>{props.name}</span>
          </div>
          <div className='invoice-right-section'>
            <span className='amount'>&#163;{props.amount}</span>
            <span className='status'>{props.status}</span>
          </div>
        </div>
    )
}

export default Invoice;