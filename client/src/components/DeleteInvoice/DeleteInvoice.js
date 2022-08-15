import React from 'react';
import { useDispatch } from 'react-redux';


import { deleteAnInvoice } from '../../actions/invoices';
import './DeleteInvoice.css';

const DeleteInvoice = ({ closeDelete, invoice }) => {
  const dispatch = useDispatch();
 

  const handleSubmit = () => {
    dispatch(deleteAnInvoice(invoice._id));
    handleCloseForm();
    window.location.href = '/';
  };

  const handleCloseForm = () => {
    closeDelete(false);
  };

  return (
    <div className="delete-invoice-container">
      <div className="delete-invoice">
        <h1>Confirm Deletion</h1>
        <span className="delete-description">
          Are you sure you want to delete invoice #<span>{invoice.id}</span>? This action cannot be
          undone
        </span>
        <div className="delete-buttons">
          <button className="editBtn delete" onClick={() => closeDelete(false)}>
            Cancel
          </button>
          <button className="deleteBtn" onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInvoice;
