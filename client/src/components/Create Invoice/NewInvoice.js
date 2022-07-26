import React, { Fragment, useState} from 'react';
// import axios from 'axios'
//import { useDispatch } from 'react-redux'
import './NewInvoice.css';

// Components
import Sidebar from '../Sidebar/Sidebar';
import BillFrom from './Bill From/BillFrom';
import BillTo from './Bill To/BillTo';
import ItemList from './Item List/ItemList';
import { ReactComponent as Back } from '../../assets/icon-arrow-left.svg';
import { CreateAnInvoice } from '../../actions/invoices';
// import validation from '../../utils/validation';
import { useDispatch } from 'react-redux';
//import {CreateAnInvoice} from './../../actions/invoices'

const NewInvoice = ({ closeNewForm }) => {
  const dispatch = useDispatch();
  const [isDraft, setDraft] = useState(0);
  let [newInvoice, setNewInvoice] = useState(
    {
    items:[{ name: "" }]
    
});


  const handleSubmit = (event) => {
    event.preventDefault();

    if (isDraft === 1) {
      newInvoice.status='draft'
      dispatch(


        CreateAnInvoice(
          //refer to dev-data/data.json or invoice model in server folder for model structure
          
         
          newInvoice
        )
      );
    } else {
      dispatch(CreateAnInvoice(newInvoice));
    }

    event.target.reset();
    handleCloseForm();
  };




  const handleChange = (event) => {
    const newData = { ...newInvoice };
    newData[event.target.id] = event.target.value;
    let arr = Object.keys(newData);
    if (
      arr.includes('streetAddress') ||
      arr.includes('city') ||
      arr.includes('postCode') ||
      arr.includes('country') ||
      arr.includes('street')
    ) {
      const { dataset, name, value } = event.target;

      setNewInvoice((values) => ({
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
      setNewInvoice(newData);
    }
  };

  const handleCloseForm = () => {
    closeNewForm(false);
  };

  return (
    <Fragment>
      
      <div className="new-invoice-page">
        <div className="new-invoice-container">
          <Sidebar />
          <form className="invoice-form" onSubmit={handleSubmit}>
            <div className="back">
              <Back /> <span>Go back</span>
            </div>
            <h1 className="title">New Invoice</h1>

            <BillFrom onChange={handleChange} />
            <BillTo onChange={handleChange} />
            <ItemList setNewInvoice={setNewInvoice} newInvoice={newInvoice}/>

            <div className="footer">
              <div className="boxShadow"></div>
              <div className="btns-container">
                <div className="btns">
                  <button id="discard" onClick={() => closeNewForm(false)}>
                    Discard
                  </button>
                  <button id="saveDraft" value="draft" onClick={() => setDraft(1)}>
                    Save as Draft
                  </button>
                  <button id="saveSend" type="submit">
                    Save & Send
                  </button>
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

export default NewInvoice;
