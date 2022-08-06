import React, {useState,useEffect} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import EditInvoice from '../Edit Invoice/EditInvoice';
import DeleteInvoice from '../DeleteInvoice/DeleteInvoice';
import {useParams,useNavigate} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './ViewInvoice.css';
import { getInvoice } from '../../actions/invoices';

const ViewInvoice = (props) => {
    const { id } = useParams();
    const [showEditInvoice, setShowEditInvoice] = useState(false);
    const [showDeleteInvoice, setShowDeleteInvoice] = useState(false);
    const navigate = useNavigate();
    const invoice = useSelector((state)=>state.invoices);
   const  dispatch=useDispatch();
  


    useEffect(() => {
        dispatch(getInvoice(id));
    }, [dispatch,id]);

    console.log(invoice.items);

if(!invoice)return null;


    const goBack = () => {
      navigate('/');
    };

    const changeColor = () => {
        let className = ''
        if (props.status === 'Paid') {
            className = 'status-paid'
        }
        else if (props.status === 'Pending') {
            className = 'status-pending'
        }
        else {
            className = 'status-draft'
        }
        return className;
    }

    return (
        <>
        <div className='viewInvoice-container'>
            <div className='view-invoice-sidebar'>
                <Sidebar />
            </div>
            
            <div className='view-invoice'>
                <div className='go-back'
                onClick = {goBack}
                >
                    <p><span className='left-arrow'><svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span>Go back</p>
                </div>
                <div className='viewInvoice-top'>
                    <div className='viewInvoice-left-section'>
                        <span className='statusTitle'>Status</span>
                        <span className={changeColor(props.status)}>{props.status}</span>
                    </div>
                    <div className='viewInvoice-right-section'>
                        <button className='editBtn' onClick={() => setShowEditInvoice(true)}>Edit</button>
                        <button className='deleteBtn' onClick={() => setShowDeleteInvoice(true)}>Delete</button>
                        <button className='markAsPaidBtn'>Mark as Paid</button>
                    </div>
                </div>
                <div className='viewInvoice-bottom'>
                    <div className='section-1'>
                        <div id='left'>
                           <span className='id'>#{invoice.id}</span> 
                           <span className='occupation'>{invoice.description}</span> 
                        </div>
                        <div id='right'>
                                <span>{typeof invoice.senderAddress === 'undefined' ? ' ' : invoice.senderAddress.street}</span>
                                <span>{typeof invoice.senderAddress === 'undefined' ? ' ' : invoice.senderAddress.city}</span>
                                <span>E{typeof invoice.senderAddress === 'undefined' ? ' ' : invoice.senderAddress.postCode}</span>
                                <span>{typeof invoice.senderAddress === 'undefined' ? ' ' : invoice.senderAddress.country}</span>
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='dates'>
                            <div className='date'>
                                <span className='invoice-dateHeading'>Invoice Date</span>
                                    <span className='invoice-date'>{invoice.invoiceDate}</span>
                            </div>
                            <div className='date'>
                                <span className='invoice-dateHeading'>Payment Due</span>
                                <span className='invoice-date'>{invoice.dueDate}</span>
                            </div>
                        </div>
                        <div className='billings'>
                            <div className='billing'>
                                <span className='bill-toHeading'>Bill To</span>
                                    <span className='bill-to'>{invoice.clientName}</span>
                            </div>
                            <div className='billing-location'>
                                    <span>{typeof invoice.clientAddress === 'undefined' ? ' ' : invoice.clientAddress.street}</span>
                                    <span>{typeof invoice.clientAddress === 'undefined' ? ' ' : invoice.clientAddress.city}</span>
                                    <span>{typeof invoice.clientAddress === 'undefined' ? ' ' : invoice.clientAddress.postCode}</span>
                                    <span>{typeof invoice.clientAddress === 'undefined' ? ' ' : invoice.clientAddress.country}</span>
                            </div>
                        </div>
                        <div className='email'>
                            <span className='sentTo'>Sent to</span>
                                <span className='email-address'>{invoice.clientEmail}</span>
                        </div>
                    </div>
                    <div className='email-mobile'>
                            <span className='sentTo'>Sent to</span>
                            <span className='email-address'>alexgrim@mail.com</span>
                        </div>
                    <div className='section-3'>
                        <div className='totals-section'>
                            <div className='item'>
                                <span className='itemName'>Item Name</span>
                                    {invoice.items?.length > 0 ? (

                                        invoice.items.map((item) => (

                                            <span>{item.name}</span>

                                        ))

                                    ) : (
                                        <span>" "</span>
                                    )}
                            
                               
                            </div>
                            <div className='quantity'>
                                <span className='qty'>QTY.</span>
                                  

                                    {invoice.items?.length > 0 ? (
                                        
                                            invoice.items.map((item) => (

                                                <span>{item.quantity}</span>

                                            ))
                                        
                                    ) : (
                                        <span>" "</span> 
                                    )}
                            </div>
                            <div className='price'>
                                <span id='price'>Price</span>
                               
                                    {invoice.items?.length > 0 ? (

                                        invoice.items.map((item) => (

                                            <span>&#163;{item.price}</span>

                                        ))

                                    ) : (
                                        <span>" "</span>
                                    )}
                                
                            </div>
                            <div className='total'>
                                <span id='total'>Total</span>
                                    {invoice.items?.length > 0 ? (

                                        invoice.items.map((item) => (

                                            <span>&#163;{item.total}</span>

                                        ))

                                    ) : (
                                        <span>" "</span>
                                    )}

                            </div>
                        </div>
                    </div>
                    <div className='amount-due'>
                            <span id='amountDue'>Amount Due</span>
                            <span id='amountDue-mobile'>Grand Total</span>
                            <span id='amount'>&#163;{invoice.total}</span>
                    </div>
                </div>
                <div className='viewInvoice-right-section-mobile'>
                        <button className='editBtn' onClick={() => setShowEditInvoice(true)}>Edit</button>
                        <button className='deleteBtn' onClick={() => setShowDeleteInvoice(true)}>Delete</button>
                        <button className='markAsPaidBtn'>Mark as Paid</button>
                </div>
            </div>
        </div>   
        {showEditInvoice && <EditInvoice
        closeEditForm = {setShowEditInvoice}
        />}

        {showDeleteInvoice && <DeleteInvoice 
        closeDelete = {setShowDeleteInvoice}
        />}  
        </>   
    )  
}

export default ViewInvoice;
