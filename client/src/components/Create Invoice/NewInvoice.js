import React, {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import './NewInvoice.css';

// Components
import Sidebar from '../Sidebar/Sidebar';
import BillFrom from './Bill From/BillFrom';
import BillTo from './Bill To/BillTo';
import ItemList from './Item List/ItemList';
import {ReactComponent as Back} from '../../assets/icon-arrow-left.svg';


const NewInvoice = () => {
    const navigate = useNavigate();

    return(
        <Fragment>
            <div className='new-invoice-page'>
                <div className="new-invoice-container">
                    <Sidebar />
                    <form className='invoice-form'>
                        <div className='back' onClick={() => navigate(-1)}><Back /> <span>Go back</span></div>
                        <h1 className='title'>New Invoice</h1>
                        <BillFrom />
                        <BillTo />
                        <ItemList />

                        <div className='footer'>
                            <div className='boxShadow'></div>
                            <div className='btns-container'>
                                <div className='btns'>
                                    <button id="discard">Discard</button>
                                    <button id='saveDraft'>Save as Draft</button>
                                    <button id='saveSend'>Save & Send</button>
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

