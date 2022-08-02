import React, {useEffect, useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import EditInvoice from '../Edit Invoice/EditInvoice';

import Sidebar from '../Sidebar/Sidebar';
import './ViewInvoice.css'

const ViewInvoice = (props) => {
    const navigate = useNavigate();

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

    const [showEditInvoice, setShowEditInvoice] = useState(false);

    //     useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true) 
    //     }, [])
        
        
    //     const refTwo = useRef(null)

    //     const handleClickOutside = (e) => {
    //         if(!refTwo.current?.contains(e.target)) {
    //             setShowEditInvoice(false)
    //         }
    //         else {
    //             console.log('clicked inside')
    //         }
    // }

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
                        <button className='editBtn' onClick={() => setShowEditInvoice(prev => !prev)}>Edit</button>
                        <button className='deleteBtn'>Delete</button>
                        <button className='markAsPaidBtn'>Mark as Paid</button>
                    </div>
                </div>
                <div className='viewInvoice-bottom'>
                    <div className='section-1'>
                        <div id='left'>
                           <span className='id'>{props.id}</span> 
                           <span className='occupation'>Graphic Design</span> 
                        </div>
                        <div id='right'>
                            <span>19 Union Terrace</span>
                            <span>London</span>
                            <span>E1 3EZ</span>
                            <span>United Kingdom</span>
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='dates'>
                            <div className='date'>
                                <span className='invoice-dateHeading'>Invoice Date</span>
                                <span className='invoice-date'>21 Aug 2021</span>
                            </div>
                            <div className='date'>
                                <span className='invoice-dateHeading'>Payment Due</span>
                                <span className='invoice-date'>20 Sep 2021</span>
                            </div>
                        </div>
                        <div className='billings'>
                            <div className='billing'>
                                <span className='bill-toHeading'>Bill To</span>
                                <span className='bill-to'>Alex Grim</span>
                            </div>
                            <div className='billing-location'>
                                <span>84 Church Way</span>
                                <span>Bradford</span>
                                <span>BD1 9PB</span>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                        <div className='email'>
                            <span className='sentTo'>Sent to</span>
                            <span className='email-address'>alexgrim@mail.com</span>
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
                                <span className='item-name'>Banner Design</span>
                                <span id='mobile-amount'>1 x &#163; 156.00</span>
                                <span className='item-name'>Email Design</span>
                                <span id='mobile-amount'>2 x &#163; 400.00</span>
                            </div>
                            <div className='quantity'>
                                <span className='qty'>QTY.</span>
                                <span>1</span>
                                <span>2</span>
                            </div>
                            <div className='price'>
                                <span id='price'>Price</span>
                                <span>&#163;156.00</span>
                                <span>&#163;400.00</span>
                            </div>
                            <div className='total'>
                                <span id='total'>Total</span>
                                <span className='amounts'>&#163;156.00</span>
                                <span className='amounts'>&#163;400.00</span>
                            </div>
                        </div>
                    </div>
                    <div className='amount-due'>
                            <span id='amountDue'>Amount Due</span>
                            <span id='amountDue-mobile'>Grand Total</span>
                            <span id='amount'>&#163;{props.amount}</span>
                    </div>
                </div>
                <div className='viewInvoice-right-section-mobile'>
                        <button className='editBtn' onClick={() => setShowEditInvoice(prev => !prev)}>Edit</button>
                        <button className='deleteBtn'>Delete</button>
                        <button className='markAsPaidBtn'>Mark as Paid</button>
                </div>
            </div>
        </div>   
        {showEditInvoice && <EditInvoice 
        // ref={refTwo} 
        /> }
        </>
    )  
}

export default ViewInvoice;
