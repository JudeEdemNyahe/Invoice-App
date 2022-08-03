//import React, { useState } from 'react';
// import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import './Invoice.css';

export const Invoice = ({invoice}) => {
  const navigate = useNavigate();
 // const [invoices, setInvoices] = useState(null);
console.log({invoice});

  const viewInvoice = () => {
    navigate('/view-invoice');
  };

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:5000/api/v1/invoices')
  //     .then(response => {
  //       setInvoices(response.data.data.invoices)
  //       console.log(response.data.data.invoices)
  //     }).catch((error) =>
  //       error.message)

  // }, []);

  // if (!invoices) return null;

  const changeColor = () => {
    let className = ''
    if (invoice.status === 'Paid') {
      className = 'status-paid'
    }
    else if (invoice.status === 'Pending') {
      className = 'status-pending'
    }
    else {
      className = 'status-draft'
    }
    return className;

  }



  return (
    <>
      <div className='invoice' onClick={viewInvoice}>
        <div className='invoice-left-section'>
          <span className='id'><span id='hashtag'>#</span>{invoice.id}</span>
          <span id='date'>Due {invoice.dueDate }</span>
          <span className='name'>{invoice.clientName}</span>
        </div>
        <div className='invoice-right-section'>
          <span className='amount'>&#163;{invoice.total}</span>
          <span id='status' className={changeColor(invoice.status)}>{invoice.status}</span>
          <span className='right-arrow'><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd" /></svg></span>
        </div>
      </div>

    
    </>
  )
}

export default Invoice;