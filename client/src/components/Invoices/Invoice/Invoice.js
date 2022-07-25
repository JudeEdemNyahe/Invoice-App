import React from 'react';

import './Invoice.css';

const Invoice = (props) => {
    return (
        <div className='invoice'>
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