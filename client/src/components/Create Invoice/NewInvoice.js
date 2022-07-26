import React, {Fragment} from 'react';
import './NewInvoice.css';

// Components
import Sidebar from '../Sidebar/Sidebar';
import BillFrom from './Bill From/BillFrom';
import BillTo from './Bill To/BillTo';

const NewInvoice = () => {
    return(
        <Fragment>
            
            <div className="new-invoice-container">
                <Sidebar />
                <div className='invoice-form'>
                    <h1 className='title'>New Invoice</h1>
                    <BillFrom />
                    <BillTo />
                    
                </div>
                
            </div>
            
        </Fragment>
    );
}

export default NewInvoice;

