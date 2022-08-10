import React, { Fragment } from 'react';

import './BillFrom.css';


const BillFrom = ({ invoice, ...props }) => {


  return invoice ? (
  
    <Fragment>
      <div className="bill-from-container">
        <h4 className="head">Bill From</h4>
        <div className="from-container">
          <form>
            <div className="f-group1">
              <label for="street">Street Address</label>
              <input type="text" id="street" name='street' data-id="senderAddress"  defaultValue={invoice.senderAddress.street} onChange={props.onChange} />
            </div>

            <div className="from-l3">
              <div className="f-group2">
                <label for="city">City</label>
                <input type="text" id="city" name='city' data-id="senderAddress" defaultValue={invoice.senderAddress.city} onChange={props.onChange} />
              </div>

              <div className="f-group2">
                <label for="postCode">Post Code</label>
                <input type="text" id="postCode" name='postCode' data-id="senderAddress" defaultValue={invoice.senderAddress.postCode} onChange={props.onChange} />
              </div>

              <div className="f-group2" id="from-country">
                <label for="country">Country</label>
                <input type="text" id="country" name='country' data-id="senderAddress" defaultValue={invoice.senderAddress.country}  onChange={props.onChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="bill-from-container">
        <h4 className="head">Bill From</h4>
        <div className="from-container">
          <form>
            <div className="f-group1">
              <label for="street">Street Address</label>
              <input type="text" id="street" name='street' onChange={props.onChange} />
            </div>

            <div className="from-l3">
              <div className="f-group2">
                <label for="city">City</label>
                <input type="text" id="city" onChange={props.onChange} />
              </div>

              <div className="f-group2">
                <label for="postCode">Post Code</label>
                <input type="text" id="postCode" onChange={props.onChange} />
              </div>

              <div className="f-group2" id="from-country">
                <label for="country">Country</label>
                <input type="text" id="country" onChange={props.onChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BillFrom;
