import React, { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Invoice from './Invoice/Invoice';
import { getInvoices, filterInvoices } from '../../actions/invoices';
import { useDispatch } from 'react-redux';
// import NoInvoice from './Invoice/NoInvoice';
import './Invoices.css';
import NewInvoice from '../Create Invoice/NewInvoice';
import { useSelector } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: '#7C5DFA'
    }
  }
});

const Invoices = () => {
  const [show, setShow] = useState(false);
  const [showNewInvoice, setShowNewInvoice] = useState(false);
  const [filters, setFilters] = useState([]);
  const invoices = useSelector((state) => state.invoices);

  const dispatch = useDispatch();
 

  useEffect(() => {
    getInvoices()

  }, [dispatch, invoices]);


  useEffect(() => {
    if (filters.length > 0) {
      dispatch(filterInvoices(filters.join('&status=')));
    } else if (filters.length === 0) {
      dispatch(getInvoices());
    }
  }, [dispatch, filters]);



  const handleFilterChange = (event) => {
    const index = filters.indexOf(event.target.value);
    if (index === -1) {
      setFilters([...filters, event.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== event.target.value));
    }
  };
console.log(invoices);
  return (
    <>
      <div className="container">
        <div className="invoices">
          <div className="left-section">
            <h1 className="invoices-title">Invoices</h1>
            {invoices?.length > 0 ? (
              <p className="numberOfInvoices">
                {' '}
                <span>There are</span> {invoices?.length} <span>total</span> invoices
              </p>
            ) : (
              <p className="numberOfInvoices">
                {' '}
                <span> No invoices </span> <span></span>
              </p>
            )}
          </div>
          <div className="right-section">
            <OutsideClickHandler
              onOutsideClick={() => {
                setShow(false);
              }}>
              <div className="dropdown">
                <div className="dropdown-heading" onClick={() => setShow((prev) => !prev)}>
                  <span className="filter-text">
                    Filter <span className="remove">by status</span>
                  </span>
                  <span className="down-arrow">
                    <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 1l4.228 4.228L9.456 1"
                        stroke="#7C5DFA"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <div className="filter-checkboxes">
                  <ThemeProvider theme={theme}>
                    {show && (
                      <FormGroup className="checkboxes">
                        <FormControlLabel
                          className="checkbox"
                          control={
                            <Checkbox
                              size="small"
                              color="secondary"
                              name="draft"
                              checked={filters.includes('draft')}
                            />
                          }
                          label={
                            <span style={{ fontFamily: 'League Spartan', fontWeight: '700' }}>
                              Draft
                            </span>
                          }
                          value="draft"
                          id="draft"
                          onChange={handleFilterChange}
                        />
                        <FormControlLabel
                          className="checkbox"
                          control={
                            <Checkbox
                              size="small"
                              color="secondary"
                              name="pending"
                              checked={filters.includes('pending')}
                            />
                          }
                          label={
                            <span style={{ fontFamily: 'League Spartan', fontWeight: '700' }}>
                              Pending
                            </span>
                          }
                          value="pending"
                          id="pending"
                          onChange={handleFilterChange}
                        />
                        <FormControlLabel
                          className="checkbox"
                          control={
                            <Checkbox
                              size="small"
                              color="secondary"
                              name="paid"
                              checked={filters.includes('paid')}
                            />
                          }
                          label={
                            <span style={{ fontFamily: 'League Spartan', fontWeight: '700' }}>
                              Paid
                            </span>
                          }
                          value="paid"
                          id="paid"
                          onChange={handleFilterChange}
                        />
                      </FormGroup>
                    )}
                  </ThemeProvider>
                </div>
              </div>
            </OutsideClickHandler>
            <OutsideClickHandler
              onOutsideClick={() => {
                setShowNewInvoice(false);
              }}>
              <div className="btn">
                <button onClick={() => setShowNewInvoice((prev) => !prev)}>
                  <span className="plus-icon">
                    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                        fill="#7C5DFA"
                        fillRule="nonzero"
                      />
                    </svg>
                  </span>
                  New<span className="remove1">Invoice</span>
                </button>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
        {invoices?.length > 0 ? ( //if there invoices in our database
          <div className="invoice-cards">
            {invoices.map((invoice) => (
              <div key={invoice._id}>
                <Invoice invoice={invoice} />
              </div>
            ))}
          </div>
        ) : (
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
            <Skeleton variant="rectangular" width={720} height={72} animation="wave" />
          </Stack>
        )}
      </div>
      {showNewInvoice && <NewInvoice closeNewForm={setShowNewInvoice} />}
    </>
  );
};

export default Invoices;
