import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Invoice.css';

export const Invoice = ({invoice}) => {
  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate(`/view-invoice/${invoice._id}`);
  };

  const changeColor = () => {
    let className = ''
    if (invoice.status === 'paid') {
      className = 'status-paid'
    }
    else if (invoice.status === 'pending') {
      className = 'status-pending'
    }
    else {
      className = 'status-draft'
    }
    return className;

  }

if(!invoice) return null;

  return (
    <>
      <div className='invoice invoice-mobile' onClick={viewInvoice} key={invoice._id}>
        <div className='invoice-left-section left-mobile'>
          <span className='id'><span id='hashtag'>#</span>{invoice.id}</span>
          <span id='date'>Due {invoice.dueDate }</span>
          <span className='name'>{invoice.clientName}</span>
        </div>
        <div className='invoice-right-section right-mobile'>
          <div className='bottom-mobile'>
            <span id='date-mobile'>Due {invoice.dueDate }</span>
            <span className='amount-mobile'>&#163;{invoice.total}</span>
          </div>
          <span className='amount'>&#163;{invoice.total}</span>
          <span id='status' className={changeColor(invoice.status)}>{invoice.status}</span>
          <span className='right-arrow'><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd" /></svg></span>
          <span id='status-mobile' className={changeColor(invoice.status)}>{invoice.status}</span>
        </div>  
      </div>
    </>
  )
}

export default Invoice;