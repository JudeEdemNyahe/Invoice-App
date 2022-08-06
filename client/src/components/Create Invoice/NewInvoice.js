import React, { Fragment, useState } from 'react';
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
import { useDispatch } from 'react-redux'
//import {CreateAnInvoice} from './../../actions/invoices'



const NewInvoice = ({ closeNewForm }) => {

    
    const dispatch = useDispatch();
    let [newInvoice, setNewInvoice] = useState({
        createdAt: ' ',
        paymentTerms: ' ',
        description: ' ',
        clientName: ' ',
        clientEmail: ' ',
        senderAddress: {
            street: ' ',
            city: ' ',
            postCode: ' ',
            country: ' '
        },
        clientAddress: {
            street: ' ',
            city: ' ',
            postCode: ' ',
            country: ' '
        },
        items: [
            {
                name: ' ',
                quantity: ' ',
                price: ' '
            }
        ]
    });
    //const dispatch=useDispatch()




    const handleChange = (event) => {
        const newData = { ...newInvoice }
        newData[event.target.id] = event.target.value
        setNewInvoice(newData)
        //console.log(newData)
    }


    

    

    
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(CreateAnInvoice({
            //refer to dev-data/data.json or invoice model in server folder for model structure
            createdAt: newInvoice.createdAt,
            paymentTerms: newInvoice.paymentTerms,
            description: newInvoice.description,
            clientName: newInvoice.clientName,
            clientEmail: newInvoice.clientEmail,
            senderAddress: {
                street: newInvoice.street,
                city: newInvoice.city,
                postCode: newInvoice.postCode,
                country: newInvoice.country
            },
            clientAddress: {
                street: newInvoice.streetAddress,
                city: newInvoice.city,
                postCode: newInvoice.postCode,
                country: newInvoice.country
            },
            items: [
                {
                    name: newInvoice.name,
                    quantity: newInvoice.quantity,
                    price: newInvoice.price
                }
            ]
        }))

        event.target.reset();
    }

    const handleChange = (event, index) => {
        const newData = { ...newInvoice }
        newData[event.target.id] = event.target.value
        setNewInvoice(newData)
        //console.log(newData)
    }

    return (
        <Fragment>
            <div className='new-invoice-page'>
                <div className="new-invoice-container">
                    <Sidebar />
                    <form className='invoice-form' onSubmit={handleSubmit}>
                        <div className='back'><Back /> <span>Go back</span></div>
                        <h1 className='title'>New Invoice</h1>
                        <BillFrom
                            onChange={handleChange}
                            street={newInvoice.street}
                            city={newInvoice.city}
                            postCode={newInvoice.postCode}
                            country={newInvoice.country}
/>
                        <BillTo
                            onChange={handleChange}
                            clientName={newInvoice.clientName}
                            clientEmail={newInvoice.clientEmail}
                            streetAddress={newInvoice.streetAddress}
                            postCode={newInvoice.postCode}
                            city={newInvoice.city}
                            country={newInvoice.country}
                            createdAt={newInvoice.createdAt}
                            paymentTerms={newInvoice.paymentTerms}
                            description={newInvoice.description}
                        />
                        <ItemList
                            onChange={handleChange}
                            name={newInvoice.name}
                            quantity={newInvoice.quantity}
                            price={newInvoice.price}
                            totalAmount = {newInvoice.qty * newInvoice.price}
                        />

                        <div className='footer'>
                            <div className='boxShadow'></div>
                            <div className='btns-container'>
                                <div className='btns'>
                                    <button id="discard" onClick={() => closeNewForm(false)}>Discard</button>
                                    <button id='saveDraft'>Save as Draft</button>
                                    <button id='saveSend' type='submit' >Save & Send</button>
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

export default NewInvoice;

