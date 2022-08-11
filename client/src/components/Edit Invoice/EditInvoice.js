import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './EditInvoice.css';
//import { useDispatch, useSelector } from 'react-redux';
import { updateInvoice } from '../../actions/invoices';
// Components
import { useDispatch } from 'react-redux';
import BillFrom from '../Create Invoice/Bill From/BillFrom';
import BillTo from '../Create Invoice/Bill To/BillTo';
import ItemList from '../Create Invoice/Item List/ItemList';
import { ReactComponent as Back } from '../../assets/icon-arrow-left.svg';
//import { updateInvoice } from '../../actions/invoices';

const EditInvoice = ({ closeEditForm, invoice, setCurrentId }) => {
  const navigate = useNavigate();

  const [invoiceData, setInvoiceData] = useState({

    items:[...invoice.items]

  });


  const dispatch = useDispatch();
  // console.log(postInvoice);
  //     const singleInvoice = invoice;
  // const invoice = useSelector((state) => state.invoices);

  useEffect(() => {
    console.log(JSON.stringify(invoiceData));
  }, [invoiceData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateInvoice(invoice._id, invoiceData));
    handleCloseForm(false);
  };

  const goBack = () => {
    navigate('/view-invoice');
  };

  const handleChange = (event) => {
    const newData = { ...invoiceData };
    newData[event.target.id] = event.target.value;
    const { dataset, name, value } = event.target;
    let arr = Object.keys(newData);
    if (
      arr.includes('streetAddress') ||
      arr.includes('city') ||
      arr.includes('postCode') ||
      arr.includes('country') ||
      arr.includes('street')
    ) {
   

      setInvoiceData((values) => ({
        ...values,
        [dataset.id]: {
          ...values[dataset.id],
          ...(dataset.nested
            ? {
                nested: {
                  ...values[dataset.id]?.nested,
                  [name]: value
                }
              }
            : {
                [name]: value
              })
        }
      }));
    } else if (arr.includes('Itemname') || arr.includes('quantity') || arr.includes('price')) {
      setInvoiceData((values) => ({
        ...values,
        [dataset.id]: {
          ...values[dataset.id],
          ...(dataset.nested
            ? {
              nested: {
                ...values[dataset.id]?.nested,
                [name]: value
              }
            }
            : {
              [name]: value
            })
        }
      }));
    } else {
      setInvoiceData(newData);
    }
  };

  const handleCloseForm = () => {
    closeEditForm(false);
  };

  return (
    <Fragment>
      <div className="new-invoice-page">
        <div className="new-invoice-container">
          {/* <Sidebar /> */}
          <form className="invoice-form" onSubmit={handleSubmit}>
            <div className="back" onClick={goBack}>
              <Back /> <span>Go back</span>
            </div>
            <h1 className="title">
              Edit<span>#</span>XM9141
            </h1>
            <BillFrom invoice={invoice} onChange={handleChange} />
            <BillTo onChange={handleChange} invoice={invoice} />
            <ItemList onChange={handleChange} invoice={invoice} />

            <div className="footer">
              <div className="boxShadow"></div>
              <div className="btns-container">
                <div className="btns2">
                  <button id="cancel" onClick={() => closeEditForm(false)}>
                    Cancel
                  </button>
                  <button id="save-changes">Save Changes</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="blank-side"></div>
      </div>
    </Fragment>
  );
};

export default EditInvoice;
