import React from 'react';

import Invoice from './Invoice/Invoice';
// import NoInvoice from './Invoice/NoInvoice';

import './Invoices.css'

const Invoices = (props) => {
    
    return (
        <div className='container'>
         <div className='invoices'>
            <div className='left-section'>
                <h1 className='title'>Invoices</h1>
                <p className='numberOfInvoices'> <span>There are</span> 7 <span>total</span> invoices</p>
            </div>
            <div className='right-section'>
                <div className='dropdown'>
                <label htmlFor="cars">Filter <span>by status</span></label>
                    <select name='filter-dropdown' id='filter-dropdown' defaultValue={''}>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </div>
                <div className='btn'>
                    <button><span className="plus-icon"><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg></span>New<span className='remove'>Invoice</span></button>
                </div>
            </div>
        </div>
        <div className='invoice-cards'>
                <Invoice 
                id='RT3080' 
                date = '19 Aug 2021' 
                name='Jensen Huang'
                amount='1,800.90'
                status='Paid'
                />
                
                <Invoice 
                id='XM9141' 
                date = '20 Sep 2021' 
                name='Alex Grim'
                amount='556.00'
                status='Pending'
                />

                <Invoice 
                id='RG0314' 
                date = '01 Oct 2021' 
                name='John Morrison'
                amount='14,002.33'
                status='Paid'
                />

                <Invoice 
                id='RT2080' 
                date = '19 Aug 2021' 
                name='Alysa Werner'
                amount='102.04'
                status='Pending'
                />

                <Invoice 
                id='AA1449' 
                date = '12 Oct 2021' 
                name='Mellisa Clarke'
                amount='4,032.33'
                status='Pending'
                />

                <Invoice 
                id='TY9141' 
                date = '31 Oct 2021' 
                name='Thomas Wayne'
                amount='6,155.91'
                status='Pending'
                />

                <Invoice 
                id='RT3080' 
                date = '12 Nov 2021' 
                name='Anita Wainwright'
                amount='3,102.04'
                status='Draft'
                />
                
                {/* <NoInvoice /> */}
            </div>
        </div>
       
    )    
}

export default Invoices;

