import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ViewInvoice from './components/ViewInvoice/ViewInvoice';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NewInvoice from './components/Create Invoice/NewInvoice';

const App = () => {

    return (
        <div className='app'>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/view-invoice" element={<ViewInvoice 
                status = 'Pending' 
                amount='556.00'
                id='#XM9141'  
                />} />
                <Route path='/new-invoice' element={<NewInvoice />}/>
            </Routes>   
        </Router>  
        </div>
    )
}

export default App;

