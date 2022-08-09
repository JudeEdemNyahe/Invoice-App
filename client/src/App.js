import React ,{useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from "use-local-storage";
import { getInvoices } from './actions/invoices';
import { useDispatch } from 'react-redux'

import ViewInvoice from './components/ViewInvoice/ViewInvoice';
import './App.css';
import Invoices from './components/Invoices/Invoices';
import Sidebar from './components/Sidebar/Sidebar';
import { lightTheme, darkTheme } from './utils/theme';
import { GlobalStyles } from './utils/global';

const App = () => {
    const [theme, setTheme] = useLocalStorage('light');
    
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getInvoices());
    }, [dispatch])



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
                <Route path="/view-invoice/:id" element={<ViewInvoice 
                />} />
            </Routes>   
        </Router>  
        </div>
        </ThemeProvider>
    )
}

export default App;

