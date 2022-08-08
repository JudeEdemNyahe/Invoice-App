import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './EditInvoice.css';
//import { useDispatch, useSelector } from 'react-redux';
import {updateInvoice} from '../../actions/invoices'
// Components
import { useDispatch } from 'react-redux';
import BillFrom from '../Create Invoice/Bill From/BillFrom';
import Sidebar from '../Sidebar/Sidebar';
import BillTo from '../Create Invoice/Bill To/BillTo';
import ItemList from '../Create Invoice/Item List/ItemList';
import { ReactComponent as Back } from '../../assets/icon-arrow-left.svg';
//import { updateInvoice } from '../../actions/invoices';

const EditInvoice = ({ closeEditForm, invoice }) => {
    const navigate = useNavigate();

    let [postInvoice, setInvoiceData] = useState({
        createdAt: invoice.createdAt,
        paymentTerms: invoice.paymentTerms,
        description: invoice.description,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        senderAddress: {
            street: invoice.senderAddress.street,
            city: invoice.senderAddress.city,
            postCode: invoice.senderAddress.postCode,
            country: invoice.senderAddress.country
        },
        clientAddress: {
            street: invoice.clientAddress.street,
            city: invoice.clientAddress.city,
            postCode: invoice.clientAddress.postCode,
            country: invoice.clientAddress.country
        },
 
    });

    useEffect(() => {
        setInvoiceData(invoice);
    }, [invoice])

// console.log(postInvoice);
//     const singleInvoice = invoice;
const dispatch = useDispatch();


    // useEffect(() => {
    //     if (singleInvoice) setInvoiceData(singleInvoice);
    // }, [singleInvoice]);

//console.log("hello",singleInvoice);
    const handleChange = (event) => {
        const newData = { ...postInvoice };
        newData[event.target.id] = event.target.value;
        setInvoiceData(newData);
        console.log(newData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        dispatch(updateInvoice(invoice._id, {
            //refer to dev-data/data.json or invoice model in server folder for model structure
            createdAt: postInvoice.createdAt,
            paymentTerms: postInvoice.paymentTerms,
            description: postInvoice.description,
            clientName: postInvoice.clientName,
            clientEmail: postInvoice.clientEmail,
            senderAddress: {
                street: postInvoice.street,
                city: postInvoice.city,
                postCode: postInvoice.postCode,
                country: postInvoice.country
            },
            clientAddress: {
                street: postInvoice.streetAddress,
                city: postInvoice.city,
                postCode: postInvoice.postCode,
                country: postInvoice.country
            }
        }));
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
                            onChange={handleChange}
                            invoice={invoice}
                            street={postInvoice.street}
                            city={postInvoice.city}
                            postCode={postInvoice.postCode}
                            country={postInvoice.country}
                        />
                        <BillTo
                            onChange={handleChange}
                        invoice={invoice} 
                            clientName={postInvoice.clientName}
                            clientEmail={postInvoice.clientEmail}
                            streetAddress={postInvoice.streetAddress}
                            postCode={postInvoice.postCode}
                            city={postInvoice.city}
                            country={postInvoice.country}
                            createdAt={postInvoice.createdAt}
                            paymentTerms={postInvoice.paymentTerms}
                            description={postInvoice.description}
                        
                        />
                        <ItemList invoice={invoice}
                            onChange={handleChange}
                            name={postInvoice.name}
                            quantity={postInvoice.quantity}
                            price={postInvoice.price}
                        />

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