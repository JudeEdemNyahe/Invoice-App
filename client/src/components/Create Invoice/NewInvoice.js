import React, {Fragment} from 'react';
import './NewInvoice.css';

// Components
import Sidebar from '../Sidebar/Sidebar';
import BillFrom from './Bill From/BillFrom';
import BillTo from './Bill To/BillTo';
import ItemList from './Item List/ItemList';

const NewInvoice = () => {
    return(
        <Fragment>
            
            <div className="new-invoice-container">
                <Sidebar />
                <form className='invoice-form'>
                    <h1 className='title'>New Invoice</h1>
                    <BillFrom />
                    <BillTo />
                    <ItemList />

                    <div className='btns'>
                        <button id="discard">Discard</button>
                        <button id='saveDraft'>Save as Draft</button>
                        <button id='saveSend'>Save & Send</button>
                    </div>
                </form>
            </div>
            
        </Fragment>
    );
}

export default NewInvoice;

