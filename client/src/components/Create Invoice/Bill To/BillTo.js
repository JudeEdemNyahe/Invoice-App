import React, { Fragment } from 'react';
import './BillTo.css';
//import { useRef } from 'react';

const BillTo = ({ invoice, ...props }) => {

  return invoice ? (
    <Fragment>
      <div className="bill-to-container">
        <h4 className="head">Bill To</h4>
        <div className="to-container">
       
            <div className="group1">
              <label htmlFor="clientName">Client's Name</label>
              <input
                type="text"
required
                id="clientName"
                defaultValue={invoice.clientName}
                onChange={props.onChange}
              />
            </div>

            <div className="group1">
              <label htmlFor="clientEmail">Client's Email</label>
              <input type="email" id="clientEmail" defaultValue={invoice.clientEmail} onChange={props.onChange} />
            </div>

            <div className="group1">
              <label htmlFor="streetAddress">Street Address</label>
              <input type="text" name="street" data-id="clientAddress" id="streetAddress" defaultValue={invoice.clientAddress.street} onChange={props.onChange} />
            </div>

            <div className="form-l3">
              <div className="t-group2">
                <label htmlFor="t-city">City</label>
                <input type="text" data-id="clientAddress" name='city' id="city" defaultValue={invoice.clientAddress.city} onChange={props.onChange} />
              </div>

              <div className="t-group2">
                <label htmlFor="postCode">Post Code</label>
                <input type="text" data-id="clientAddress" name='postCode' id="postCode" defaultValue={invoice.clientAddress.postCode} onChange={props.onChange} />
              </div>

              <div className="t-group2" id="to-country">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" data-id="clientAddress" defaultValue={invoice.clientAddress.country} name='country' onChange={props.onChange} />
              </div>
            </div>

            <div className="form-l2">
              <div className="two-column">
                <div className="group3">
                  <label htmlFor="createdAt">Invoice Date</label>
                  <input type="date" id="createdAt" defaultValue={invoice.htmlDate} onChange={props.onChange} />
                </div>
                <div className="group3">
                  <label htmlFor="paymentTerms">Payment Terms</label>
                  <select name="payment-terms" id="paymentTerms" defaultValue={invoice.paymentTerms} onChange={props.onChange}>
                    <option value="30">
                      Next 30 days
                    </option>
                    <option value="15">Next 15 days</option>
                    <option value="7">Next 7 days</option>
                    <option value="1">Next 1 days</option>
                  </select>
                </div>
              </div>
              <div className="group1">
                <label htmlFor="description">Payment Description</label>
                <input type="text" id="description" defaultValue={invoice.description} onChange={props.onChange} />
              </div>
            </div>
        
        </div>
      </div>
    </Fragment>
  ) : (
    ////////////////////////////
    <Fragment>
      <div className="bill-to-container">
        <h4 className="head">Bill To</h4>
        <div className="to-container">
         
            <div className="group1">
              <label htmlFor="clientName">Client's Name</label>
              <input
                type="text"

                id="clientName"
               
                onChange={props.onChange}
              />
            </div>

            <div className="group1">
              <label htmlFor="clientEmail">Client's Email</label>
              <input type="email" id="clientEmail" onChange={props.onChange} />
            </div>

            <div className="group1">
              <label htmlFor="streetAddress">Street Address</label>
                <input type="text" id='street' name='street' data-id="clientAddress" onChange={props.onChange} />
            </div>

            <div className="form-l3">
              <div className="t-group2">
                <label htmlFor="t-city">City</label>
                  <input type="text" id='city' name='city' data-id="clientAddress" onChange={props.onChange} />
              </div>

              <div className="t-group2">
                <label htmlFor="postCode">Post Code</label>
                  <input type="text" id="postCode" name='postCode' data-id="clientAddress" onChange={props.onChange} />
              </div>

              <div className="t-group2" id="to-country">
                <label htmlFor="country">Country</label>
                  <input type="text" id='country' name='country' data-id="clientAddress" onChange={props.onChange} />
              </div>
            </div>

            <div className="form-l2">
              <div className="two-column">
                <div className="group3">
                  <label htmlFor="createdAt">Invoice Date</label>
                  <input type="date" id="createdAt" onChange={props.onChange} />
                </div>
                <div className="group3">
                  <label htmlFor="paymentTerms">Payment Terms</label>
                  <select name="payment-terms" id="paymentTerms" defaultValue="30" onChange={props.onChange}>
                    <option value="30" >
                      Next 30 days
                    </option>
                    <option value="15">Next 15 days</option>
                    <option value="7">Next 7 days</option>
                    <option value="1">Next 1 days</option>
                  </select>
                </div>
              </div>
              <div className="group1">
                <label htmlFor="description">Payment Description</label>
                  <input type="text" id="description" onChange={props.onChange} />
              </div>
            </div>
      
        </div>
      </div>
    </Fragment>
  );
};

export default BillTo;
