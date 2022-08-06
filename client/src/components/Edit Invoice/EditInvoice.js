import React, {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';

import '../Create Invoice/NewInvoice.css';
import './EditInvoice.css';

// Components
import BillFrom from '../Create Invoice/Bill From/BillFrom';
import Sidebar from '../Sidebar/Sidebar';
import BillTo from '../Create Invoice/Bill To/BillTo';
import ItemList from '../Create Invoice/Item List/ItemList';
import {ReactComponent as Back} from '../../assets/icon-arrow-left.svg';

const EditInvoice = ({closeEditForm}) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate('/view-invoice');
    };

    return(
        <Fragment>
            <div className='new-invoice-page'>
                <div className="new-invoice-container">
                    <Sidebar />
                    <form className='invoice-form'>
                        <div className='back' onClick = {goBack}><Back /> <span>Go back</span></div>
                        <h1 className='title'>Edit<span>#</span>XM9141</h1>
                        <BillFrom />
                        <BillTo />
                        <ItemList />

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