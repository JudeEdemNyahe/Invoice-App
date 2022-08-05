import React from 'react';

import './DeleteInvoice.css'

const DeleteInvoice =  ({closeDelete}) => {
    return (
        <div className='delete-invoice-container'>
            <div className='delete-invoice'>
            <h1>Confirm Deletion</h1>
            <span className='delete-description'>Are you sure you want to delete invoice #XM9141? This action cannot be undone</span>
            <div className='delete-buttons'>
                <button className='editBtn edit' onClick={() => closeDelete(false)}>Cancel</button>
                <button className='deleteBtn'>Delete</button>
            </div>
            </div>
        </div>
    ) 
}

export default DeleteInvoice;