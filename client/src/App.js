import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Invoices from './components/Invoices/Invoices';
import Sidebar from './components/Sidebar/Sidebar';
import ViewInvoice from './components/ViewInvoice/ViewInvoice';
import './App.css';
import HomePage from './components/HomePage/HomePage';

const App = () => {
    return (
        <div className='app'>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/view-invoice" element={<ViewInvoice />} />
            </Routes>   
        </Router> 
        </div>
    )
}

export default App;

