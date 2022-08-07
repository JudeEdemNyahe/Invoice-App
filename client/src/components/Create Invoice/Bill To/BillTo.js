//import moment  from 'react-moment';
import React, {Fragment} from 'react';
import './BillTo.css'

const BillTo = ({ singleInvoice ,...props}) => {
    return(
        <Fragment>
            <div className='bill-to-container'>
                < h4 className='head'>Bill To</h4>
                <div className='to-container'>
                    <form>
                        <div className='group1'>
                            <label for="clientName">Client's Name</label>
                            <input type="text" id="clientName" value={singleInvoice && singleInvoice.clientName}
                            onChange={props.onChange} 
                            />
                        </div>

                        <div className='group1'>
                            <label for="clientEmail">Client's Email</label>
                            <input type="email" id="clientEmail" value={singleInvoice && singleInvoice.clientEmail} 
                            onChange={props.onChange}
                            />
                        </div>

                        <div className='group1'>
                            <label for="streetAddress">Street Address</label>
                            <input type="text" id="streetAddress" value={singleInvoice && singleInvoice.clientAddress.street} 
                            onChange={props.onChange}
                            />
                        </div>
                          
                        <div className='form-l3'>
                            <div className='t-group2'>
                                <label for="t-city">city</label>
                                <input type="text" id="city" value={singleInvoice && singleInvoice.clientAddress.city} 
                                onChange={props.onChange}
                                />
                            </div>
        
                            <div className='t-group2'>
                                <label for="postCode">Post Code</label>
                                <input type="text" id="postCode" value={singleInvoice && singleInvoice.clientAddress.postCode} 
                                onChange={props.onChange}
                                />
                            </div>
        
                            <div className='t-group2' id='to-country'>
                                <label for="country">Country</label>
                                <input type="text" id="country" value={singleInvoice && singleInvoice.clientAddress.country} 
                                onChange={props.onChange}
                                />
                            </div>
                        </div>

                        <div className='form-l2'>
                            <div className='two-column'>
                                <div className='group3'>
                                    <label for="createdAt">Invoice Date</label>
                                    <input type="date" id="createdAt" 
                                    onChange={props.onChange}
                                    />
                                </div>
                                <div className='group3'>
                                    <label for="paymentTerms">Payment Terms</label>
                                    <select name="payment-terms" id="paymentTerms" value={singleInvoice && singleInvoice.paymentTerms} 
                                    onChange={props.onChange}>
                                        <option value="30" selected>Next 30 days</option>
                                      <option value="15">Next 15 days</option>
                                      <option value="7">Next 7 days</option>
                                      <option value="1">Next 1 day</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group1'>
                                <label for="description">Payment Description</label>
                                <input type="text" id="description"  value={singleInvoice && singleInvoice.description} 
                                onChange={props.onChange}
                                />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BillTo;