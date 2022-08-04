import React, {Fragment} from 'react';
import './BillTo.css'

const BillTo = (props) => {
    return(
        <Fragment>
            <div className='bill-to-container'>
                < h4 className='head'>Bill To</h4>
                <div className='to-container'>
                    <form>
                        <div className='group1'>
                            <label for="client">Client's Name</label>
                            <input type="text" id="client" 
                            onChange={props.onChange} 
                            />
                        </div>

                        <div className='group1'>
                            <label for="email">Client's Email</label>
                            <input type="email" id="email" 
                            onChange={props.onChange}
                            />
                        </div>

                        <div className='group1'>
                            <label for="street">Street Address</label>
                            <input type="text" id="streetAddress" 
                            onChange={props.onChange}
                            />
                        </div>
                          
                        <div className='form-l3'>
                            <div className='t-group2'>
                                <label for="t-city">City</label>
                                <input type="text" id="tCity"
                                onChange={props.onChange}
                                />
                            </div>
        
                            <div className='t-group2'>
                                <label for="t-postal">Post Code</label>
                                <input type="text" id="tPostal"
                                onChange={props.onChange}
                                />
                            </div>
        
                            <div className='t-group2' id='to-country'>
                                <label for="t-country">Country</label>
                                <input type="text" id="tCountry"
                                onChange={props.onChange}
                                />
                            </div>
                        </div>

                        <div className='form-l2'>
                            <div className='two-column'>
                                <div className='group3'>
                                    <label for="date">Invoice Date</label>
                                    <input type="date" id="date"
                                    onChange={props.onChange}
                                    />
                                </div>
                                <div className='group3'>
                                    <label for="terms">Payment Terms</label>
                                    <select name="payment-terms" id="terms"
                                    onChange={props.onChange}>
                                      <option value="30" selected>Next 30 days</option>
                                      <option value="15">Next 15 days</option>
                                      <option value="7">Next 7 days</option>
                                      <option value="1">Next 1 days</option>
                                    </select>
                                </div>
                            </div>
                            <div className='group1'>
                                <label for="description">Payment Description</label>
                                <input type="text" id="description"
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