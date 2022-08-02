import React, {useState, useRef, useEffect} from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Invoice from './Invoice/Invoice';
// import NoInvoice from './Invoice/NoInvoice';
import './Invoices.css'
import NewInvoice from '../Create Invoice/NewInvoice';

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#7C5DFA',
      },
    },
  });

const Invoices = () => {
    const [show, setShow] = useState(false);
    const [showNewInvoice, setShowNewInvoice] = useState(false);

    // useEffect(() => {
    //    document.addEventListener('click', handleClickOutside, true) 
    // }, [])
    
    
    // const refOne = useRef(null)

    // const handleClickOutside = (e) => {
    //     if(!refOne.current?.contains(e.target)) {
    //         setShowNewInvoice(false)
    //     }
    //     else {
    //         setShowNewInvoice(true)
    //     }
    // }
    
    return (
        <>
        <div className='container'>
         <div className='invoices'>
            <div className='left-section'>
                <h1 className='invoices-title'>Invoices</h1>
                <p className='numberOfInvoices'> <span>There are</span> 7 <span>total</span> invoices</p>
            </div>
            <div className='right-section'>
                <div className='dropdown'>
                    <div className='dropdown-heading' onClick={() => setShow(prev => !prev)}>
                        <span className='filter-text'>Filter <span className='remove'>by status</span></span>
                        <span className='down-arrow'><svg width="11" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span>
                    </div>
                    <div className='filter-checkboxes'>
                    <ThemeProvider theme={theme}>
                    {show && <FormGroup className="checkboxes" >
                        <FormControlLabel 
                        className='checkbox' 
                        control={<Checkbox 
                        size='small' 
                        color="secondary"
                        />} 
                        label={<span style={{ fontFamily: 'League Spartan',  fontWeight: '700'}}>Draft</span>} />
                        <FormControlLabel 
                        className='checkbox'
                        control={<Checkbox 
                        size='small' 
                        color="secondary"
                        />} 
                        label={<span style={{ fontFamily: 'League Spartan', fontWeight: '700'}}>Pending</span>} />
                        <FormControlLabel 
                        className='checkbox'
                        control={<Checkbox 
                        size='small' 
                        color="secondary"
                        />} 
                        label={<span style={{ fontFamily: 'League Spartan',  fontWeight: '700'}}>Paid</span>} />
                    </FormGroup>}
                    </ThemeProvider>
                    </div>
                </div>
                <div className='btn'>
                    <button onClick={() => setShowNewInvoice(prev => !prev)}><span className="plus-icon"><svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg></span>New<span className='remove1'>Invoice</span></button>
                </div>
            </div>
        </div>          
        <div className='invoice-cards'>
                <Invoice 
                id='RT3080' 
                date = '19 Aug 2021' 
                name='Jensen Huang'
                amount='1,800.90'
                status='Paid'
                />
                
                <Invoice 
                id='XM9141' 
                date = '20 Sep 2021' 
                name='Alex Grim'
                amount='556.00'
                status='Pending'
                />

                <Invoice 
                id='RG0314' 
                date = '01 Oct 2021' 
                name='John Morrison'
                amount='14,002.33'
                status='Paid'
                />

                <Invoice 
                id='RT2080' 
                date = '19 Aug 2021' 
                name='Alysa Werner'
                amount='102.04'
                status='Pending'
                />

                <Invoice 
                id='AA1449' 
                date = '12 Oct 2021' 
                name='Mellisa Clarke'
                amount='4,032.33'
                status='Pending'
                />

                <Invoice 
                id='TY9141' 
                date = '31 Oct 2021' 
                name='Thomas Wayne'
                amount='6,155.91'
                status='Pending'
                />

                <Invoice 
                id='FV2353' 
                date = '12 Nov 2021' 
                name='Anita Wainwright'
                amount='3,102.04'
                status='Draft'
                />
                
                {/* <NoInvoice /> */}
            </div>
        </div>
            {showNewInvoice && <NewInvoice 
            // ref={refOne}
            /> }
        </>
       
    )    
}

export default Invoices;

