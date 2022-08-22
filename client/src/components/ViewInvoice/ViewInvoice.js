import React, { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';

import { useDispatch, useSelector } from 'react-redux';
import EditInvoice from '../Edit Invoice/EditInvoice';
import DeleteInvoice from '../DeleteInvoice/DeleteInvoice';
import { useParams } from 'react-router-dom';
import './ViewInvoice.css';
import { getInvoice, updateInvoice } from '../../actions/invoices';

const ViewInvoice = (props) => {
  const { id } = useParams();
  const [showEditInvoice, setShowEditInvoice] = useState(false);
  const [showDeleteInvoice, setShowDeleteInvoice] = useState(false);

  const dispatch = useDispatch();
  let invoice = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(getInvoice(id));
  }, [invoice, dispatch, id]);

  const handleMark = () => {
    if (invoice.status === 'pending' || invoice.status === 'draft') {
      dispatch(updateInvoice(invoice._id, { status: 'Paid' }));
    } else {
      dispatch(updateInvoice(invoice._id, { status: 'Pending' }));
    }
  };

  const goBack = () => {
    window.location.href = '/';
  };

  const changeColor = () => {
    let className = '';
    if (invoice.status === 'paid') {
      className = 'status-paid';
    } else if (invoice.status === 'pending') {
      className = 'status-pending';
    } else {
      className = 'status-draft';
    }
    return className;
  };

  if (!invoice) return null;
  return (
    <>
      <div className="viewInvoice-container">
        <div className="view-invoice-sidebar">{/* <Sidebar /> */}</div>

        <div className="view-invoice">
          <div className="go-back" onClick={goBack}>
            <p>
              <span className="left-arrow">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.342.886L2.114 5.114l4.228 4.228"
                    stroke="#9277FF"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              Go back
            </p>
          </div>
          <div className="viewInvoice-top">
            <div className="viewInvoice-left-section">
              <span className="statusTitle">Status</span>
              <span id="status" className={changeColor(props.status)}>
                {invoice.status || <Skeleton />}
              </span>
            </div>
            <div className="viewInvoice-right-section">
              <button
                className="editBtn"
                onClick={() => (invoice.status ? setShowEditInvoice(true) : null)}>
                {invoice.status ? 'Edit' : ' '}
              </button>
              <button
                className="deleteBtn"
                onClick={() => (invoice.status ? setShowDeleteInvoice(true) : null)}>
                {invoice.status ? 'Delete' : ' '}
              </button>
              <button
                className="markAsPaidBtn"
                onClick={() => (invoice.status ? handleMark() : null)}>
                {invoice.status
                  ? invoice.status === 'pending' || invoice.status === 'draft'
                    ? 'Mark as Paid'
                    : 'Mark as Pending'
                  : ' '}
              </button>
            </div>
          </div>
          <div className="viewInvoice-bottom">
            <div className="section-1">
              <div id="left">
                <span className="id" id="id-view">
                  #{invoice.id || <Skeleton height={35} width={90} />}
                </span>
                <span className="occupation">
                  {invoice.description || <Skeleton height={35} width={90} />}
                </span>
              </div>
              <div id="right">
                <span>
                  {typeof invoice.senderAddress === 'undefined' ? (
                    <Skeleton height={25} width={60} />
                  ) : (
                    invoice.senderAddress.street
                  )}
                </span>
                <span>
                  {typeof invoice.senderAddress === 'undefined' ? ' ' : invoice.senderAddress.city}
                </span>
                <span>
                  {typeof invoice.senderAddress === 'undefined' ? (
                    <Skeleton height={25} />
                  ) : (
                    invoice.senderAddress.postCode
                  )}
                </span>
                <span>
                  {typeof invoice.senderAddress === 'undefined' ? (
                    <Skeleton height={25} />
                  ) : (
                    invoice.senderAddress.country
                  )}
                </span>
              </div>
            </div>
            <div className="section-2">
              <div className="dates">
                <div className="date">
                  <span className="invoice-dateHeading">Invoice Date</span>
                  <span className="invoice-date">
                    {invoice.invoiceDate || <Skeleton height={25} />}
                  </span>
                </div>
                <div className="date">
                  <span className="invoice-dateHeading">Payment Due</span>
                  <span className="invoice-date">
                    {invoice.dueDate || <Skeleton height={25} />}
                  </span>
                </div>
              </div>
              <div className="billings">
                <div className="billing">
                  <span className="bill-toHeading">Bill To</span>
                  <span className="bill-to">{invoice.clientName || <Skeleton height={25} />}</span>
                </div>
                <div className="billing-location">
                  <span>
                    {typeof invoice.clientAddress === 'undefined' ? (
                      <Skeleton height={25} />
                    ) : (
                      invoice.clientAddress.street
                    )}
                  </span>
                  <span>
                    {typeof invoice.clientAddress === 'undefined'
                      ? ' '
                      : invoice.clientAddress.city}
                  </span>
                  <span>
                    {typeof invoice.clientAddress === 'undefined' ? (
                      <Skeleton height={25} />
                    ) : (
                      invoice.clientAddress.postCode
                    )}
                  </span>
                  <span>
                    {typeof invoice.clientAddress === 'undefined'
                      ? ' '
                      : invoice.clientAddress.country}
                  </span>
                </div>
              </div>
              <div className="email">
                <span className="sentTo">Sent to</span>
                <span className="email-address">
                  {invoice.clientEmail || <Skeleton height={25} width={200} />}
                </span>
              </div>
            </div>

            <div className="email-mobile">
              <span className="sentTo">Sent to</span>
              <span className="email-address">
                {invoice.clientEmail || <Skeleton height={20} />}
              </span>
            </div>
            <div className="section-3">
              <div className="totals-section">
                <div className="item">
                  <span className="itemName">Item Name</span>
                  {invoice.items?.length > 0 ? (
                    invoice.items.map((item, i) => <span key={i}>{item.name}</span>)
                  ) : (
                    <span>
                      <Skeleton height={35} />
                    </span>
                  )}
                </div>
                <div className="quantity">
                  <span className="qty">QTY.</span>

                  {invoice.items?.length > 0 ? (
                    invoice.items.map((item, i) => <span key={i}>{item.quantity}</span>)
                  ) : (
                    <span>
                      <Skeleton height={35} />
                    </span>
                  )}
                </div>
                <div className="price">
                  <span id="price">Price</span>

                  {invoice.items?.length > 0 ? (
                    invoice.items.map((item, i) => <span key={i}>&#163;{item.price}</span>)
                  ) : (
                    <span>
                      <Skeleton height={35} />
                    </span>
                  )}
                </div>
                <div className="total">
                  <span id="total">Total</span>
                  {invoice.items?.length > 0 ? (
                    invoice.items.map((item, i) => <span key={i}>&#163;{item.total}</span>)
                  ) : (
                    <span>
                      <Skeleton height={35} />
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="amount-due">
              <span id="amountDue">Amount Due</span>
              <span id="amountDue-mobile">Grand Total</span>
              <span id="amount">&#163;{invoice.total}</span>
            </div>
          </div>
          <div className="viewInvoice-right-section-mobile">
            <button
              className="editBtn"
              onClick={() => (invoice.status ? setShowEditInvoice(true) : null)}>
              {invoice.status ? 'Edit' : ' '}
            </button>
            <button
              className="deleteBtn"
              onClick={() => (invoice.status ? setShowDeleteInvoice(true) : null)}>
              {invoice.status ? 'Delete' : ' '}
            </button>
            <button
              className="markAsPaidBtn"
              onClick={() => (invoice.status ? handleMark() : null)}>
              {invoice.status
                ? invoice.status === 'Pending' || invoice.status === 'Draft'
                  ? 'Mark as Paid'
                  : 'Mark as Pending'
                : ' '}
            </button>
          </div>
        </div>
      </div>
      {showEditInvoice && <EditInvoice invoice={invoice} closeEditForm={setShowEditInvoice} />}

      {showDeleteInvoice && <DeleteInvoice invoice={invoice} closeDelete={setShowDeleteInvoice} />}
    </>
  );
};

export default ViewInvoice;
