import React, {Fragment} from 'react';
import './BillTo.css'

const BillTo = () => {
    return(
        <Fragment>
            <div className='bill-to-container'>
                < h4 className='head'>Bill To</h4>
                <div className='to-container'>
                    <form>
                        <div className='group1'>
                            <label for="client">Client's Name</label>
                            <input type="text" id="client"/>
                        </div>

                        <div className='group1'>
                            <label for="email">Client's Email</label>
                            <input type="email" id="email"/>
                        </div>

                        <div className='group1'>
                            <label for="street">Street Address</label>
                            <input type="text" id="street"/>
                        </div>
                          
                        <div className='form-l3'>
                            <div className='t-group2'>
                                <label for="t-city">City</label>
                                <input type="text" id="t-city"/>
                            </div>
        
                            <div className='t-group2'>
                                <label for="t-postal">Post Code</label>
                                <input type="text" id="t-postal"/>
                            </div>
        
                            <div className='t-group2' id='to-country'>
                                <label for="t-country">Country</label>
                                <input type="text" id="t-country"/>
                            </div>
                        </div>

                        <div className='form-l2'>
                            <div className='two-column'>
                                <div className='group3'>
                                    <label for="date">Invoice Date</label>
                                    <input type="date" id="date"/>
                                </div>
                                <div className='group3'>
                                    <label for="terms">Payment Terms</label>
                                    <select name="payment-terms" id="terms">
                                      <option value="30" selected>Next 30 days</option>
                                      <option value="15">Next 15 days</option>
                                      <option value="7">Next 7 days</option>
                                      <option value="1">Next 1 days</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className='group1'>
                                <label for="description">Payment Description</label>
                                <input type="text" id="description"/>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BillTo;