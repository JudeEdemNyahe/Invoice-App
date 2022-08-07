import React from 'react';
import { deleteAnInvoice } from '../../actions/invoices'
import './DeleteInvoice.css'
import { useDispatch } from 'react-redux';

const DeleteInvoice = ({ closeDelete, invoice }) => {


const dispatch = useDispatch();


    return (
        <div className='delete-invoice-container'>
            <div className='delete-invoice'>
            <h1>Confirm Deletion</h1>
            <span className='delete-description'>Are you sure you want to delete invoice #XM9141? This action cannot be undone</span>
            <div className='delete-buttons'>
                <button className='editBtn edit' onClick={() => closeDelete(false)}>Cancel</button>
                    <button className='deleteBtn'  onClick={() => dispatch(deleteAnInvoice(invoice._id))} >Delete</button>
            </div>
            </div>
        </div>
    ) 
}

export default DeleteInvoice;