import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './EditInvoice.css';
//import { useDispatch, useSelector } from 'react-redux';
import {updateInvoice} from '../../actions/invoices'
// Components
import { useDispatch, useSelector } from 'react-redux';
import BillFrom from '../Create Invoice/Bill From/BillFrom';
import Sidebar from '../Sidebar/Sidebar';
import BillTo from '../Create Invoice/Bill To/BillTo';
import ItemList from '../Create Invoice/Item List/ItemList';
import { ReactComponent as Back } from '../../assets/icon-arrow-left.svg';
//import { updateInvoice } from '../../actions/invoices';

const EditInvoice = ({ closeEditForm, currentId, setCurrentId  }) => {
    const navigate = useNavigate();
    const [invoiceData, setInvoiceData] = useState(null);

    const dispatch=useDispatch();
// console.log(postInvoice);
//     const singleInvoice = invoice;
    const invoice = useSelector((state) => state.invoices);

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updateInvoice(invoice._id,invoiceData))
    };


    const handleChange = (event) => {
        
        const newData = { ...invoiceData };
        newData[event.target.id] = event.target.value;
        setInvoiceData(newData);
        console.log(newData)
    };



    const goBack = () => {
        navigate('/view-invoice');
    };

  
    return (
        <Fragment>
            <div className='new-invoice-page'>
                <div className="new-invoice-container">
                    <Sidebar />
                    <form className='invoice-form' onSubmit={handleSubmit}>
                        <div className='back' onClick={goBack}><Back /> <span>Go back</span></div>
                        <h1 className='title'>Edit<span>#</span>XM9141</h1>
                        <BillFrom 
                           invoice={invoice}
                         
                            onChange={handleChange}
                            street={invoice.street}
                            city={invoice.city}
                            postCode={invoice.postCode}
                            country={invoice.country}
                        
                        />
                        <BillTo onChange={handleChange} invoice={invoice} />
                        <ItemList/>

                        <div className='footer'>
                            <div className='boxShadow'></div>
                            <div className='btns-container'>
                                <div className='btns2'>
                                    <button id="cancel" onClick={() => closeEditForm(false)}>Cancel</button>
                                    <button id='save-changes'>Save Changes</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                <div className='blank-side'></div>
            </div>


        </Fragment>
    );
}

export default EditInvoice;