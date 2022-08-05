import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from "use-local-storage";

import ViewInvoice from './components/ViewInvoice/ViewInvoice';
import './App.css';
import Invoices from './components/Invoices/Invoices';
import Sidebar from './components/Sidebar/Sidebar';
import { lightTheme, darkTheme } from './utils/theme';
import { GlobalStyles } from './utils/global';

const App = () => {
    const [theme, setTheme] = useLocalStorage('light');

    const toggleTheme = () => {
      if (theme === 'light') {
          setTheme('dark');
      } else {
          setTheme('light');
      }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <div className='app'>
        <GlobalStyles className='global' />
            <Sidebar onClick={toggleTheme} 
            darkMode = {setTheme}
            / >
        <Router>
            <Routes>
                <Route path="/" element={<Invoices />} />
                <Route path="/view-invoice" element={<ViewInvoice 
                status = 'Pending' 
                amount='556.00'
                id='#XM9141'  
                />} />
            </Routes>   
        </Router>  
        </div>
        </ThemeProvider>
    )
}

export default App;

