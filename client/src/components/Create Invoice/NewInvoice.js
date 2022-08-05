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
import axios from 'axios';
//import {CreateAnInvoice} from './../../actions/invoices'


const url = 'https://amalitech-invoice-app.herokuapp.com/api/v1/invoices';

const NewInvoice = ({closeNewForm}) => {
    const [newInvoice, setNewInvoice] = useState({
        street: '',
        city: '',
        postal: '',
        country: '',
        client: '',
        streetAddress: '',
        email: '',
        tCity: '',
        tPostal: '',
        tCountry: '',
        date: '',
        terms: '',
        description: '',
        name: '',
        qty: '',
        price: '',
    });
//const dispatch=useDispatch()


    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url, {
            //refer to dev-data/data.json or invoice model in server folder for model structure
            createdAt: newInvoice.date,
            paymentTerms: newInvoice.terms,
            description: newInvoice.description,
            clientName: newInvoice.client,
            clientEmail: newInvoice.email,
            senderAddress: {
                street: newInvoice.street,
                city: newInvoice.city,
                postCode: newInvoice.postal,
                country: newInvoice.country
            },
            clientAddress: {
                street: newInvoice.streetAddress,
                city: newInvoice.tCity,
                postCode: newInvoice.tPostal,
                country: newInvoice.tCountry
            },
            items: [
                {
                    name: newInvoice.name,
                    quantity: newInvoice.qty,
                    price: newInvoice.price
                }
            ]
        })
            .then(response => {
                setNewInvoice(response.data.data.invoice)

                //   console.log(response.data.data.invoice)
            }).catch(err => console.log(err))//to see error message api
    }

    const handleChange = (event) => {
        const newData = { ...newInvoice }
        newData[event.target.id] = event.target.value
        setNewInvoice(newData)
        //console.log(newData)
    }

    // useEffect(() => {
    //     axios({
    //         method: 'post',
    //         url: 'https://amalitech-invoice-app.herokuapp.com/api/v1/invoices',
    //         // data: invoicesFormData,
    //         headers: { "Content-Type": "multipart/form-data" }

    //     })
    //         .then(response => {
    //             setNewInvoice(response.data.data.invoices)
    //             // console.log(response.data.data.invoices)
    //         }).catch((error) =>
    //             error.message)

    // }, []);

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
                            country={newInvoice.country}
                            postal={newInvoice.postal}
                        />
                        <BillTo
                            onChange={handleChange}
                            client={newInvoice.client}
                            email={newInvoice.email}
                            streetAddress={newInvoice.streetAddress}
                            tPostal={newInvoice.tPostal}
                            tCity={newInvoice.tCity}
                            tCountry={newInvoice.tCountry}
                            date={newInvoice.date}
                            terms={newInvoice.terms}
                            description={newInvoice.description}
                        />
                        <ItemList
                            onChange={handleChange}
                            name={newInvoice.name}
                            qty={newInvoice.qty}
                            price={newInvoice.price}
                        />

                        <div className='footer'>
                            <div className='boxShadow'></div>
                            <div className='btns-container'>
                                <div className='btns'>
                                    <button id="discard" onClick={() => closeNewForm(false)}>Discard</button>
                                    <button id='saveDraft'>Save as Draft</button>
                                    <button id='saveSend' type='submit'>Save & Send</button>
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

