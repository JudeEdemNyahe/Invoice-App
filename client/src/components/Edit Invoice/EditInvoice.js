import React, {Fragment} from 'react';
import '../Create Invoice/NewInvoice.css';
import './EditInvoice.css';

// Components
import BillFrom from '../Create Invoice/Bill From/BillFrom';
import Sidebar from '../Sidebar/Sidebar';
import BillTo from '../Create Invoice/Bill To/BillTo';
import ItemList from '../Create Invoice/Item List/ItemList';
import {ReactComponent as Back} from '../../assets/icon-arrow-left.svg';
const EditInvoice = () => {
    return(
        <Fragment>
            <div className='new-invoice-page'>
                <div className="new-invoice-container">
                    <Sidebar />
                    <form className='invoice-form'>
                        <div className='back'><Back /> <span>Go back</span></div>
                        <h1 className='title'>Edit<span>#</span>X9141</h1>
                        <BillFrom />
                        <BillTo />
                        <ItemList />

                        <div className='footer'>
                            <div className='boxShadow'></div>
                            <div className='btns-container'>
                                <div className='btns2'>
                                    <button id="cancel">Cancel</button>
                                    <button id='save-changes'>Save Changs</button>
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