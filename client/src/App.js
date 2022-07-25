import React from 'react';

import Invoices from './components/Invoices/Invoices';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <Sidebar />
            <Invoices />
        </div>
    )
}

export default App;
