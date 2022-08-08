import React, { Fragment } from 'react';
import './BillTo.css';
import { useRef } from 'react';

const BillTo = ({ invoice, ...props }) => {
  const ref = useRef(null);
  return (
    <Fragment>
      <div className="bill-to-container">
        <h4 className="head">Bill To</h4>
        <div className="to-container">
          <form>
            <div className="group1">
              <label for="clientName">Client's Name</label>
              <input type="text" ref={ref} id="clientName" defaultValue={invoice.clientName}  onChange={props.onChange} />
            </div>

            <div className="group1">
              <label for="clientEmail">Client's Email</label>
              <input type="email" id="clientEmail"  onChange={props.onChange} />
            </div>

            <div className="group1">
              <label for="streetAddress">Street Address</label>
              <input type="text" id="streetAddress"  onChange={props.onChange} />
            </div>

            <div className="form-l3">
              <div className="t-group2">
                <label for="t-city">city</label>
                <input type="text" id="city" onChange={props.onChange} />
              </div>

              <div className="t-group2">
                <label for="postCode">Post Code</label>
                <input type="text" id="postCode" onChange={props.onChange} />
              </div>

              <div className="t-group2" id="to-country">
                <label for="country">Country</label>
                <input type="text" id="country" onChange={props.onChange} />
              </div>
            </div>

            <div className="form-l2">
              <div className="two-column">
                <div className="group3">
                  <label for="createdAt">Invoice Date</label>
                  <input type="date" id="createdAt" onChange={props.onChange} />
                </div>
                <div className="group3">
                  <label for="paymentTerms">Payment Terms</label>
                  <select name="payment-terms" id="paymentTerms"  onChange={props.onChange}>
                    <option value="30" selected>
                      Next 30 days
                    </option>
                    <option value="15">Next 15 days</option>
                    <option value="7">Next 7 days</option>
                    <option value="1">Next 1 days</option>
                  </select>
                </div>
              </div>
              <div className="group1">
                <label for="description">Payment Description</label>
                <input type="text" id="description" onChange={props.onChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BillTo;
