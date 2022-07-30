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
                            <div className='group2'>
                                <label for="city">City</label>
                                <input type="text" id="city"/>
                            </div>
        
                            <div className='group2'>
                                <label for="postal">Post Code</label>
                                <input type="text" id="postal"/>
                            </div>
        
                            <div className='group2' id='to-country'>
                                <label for="country">Country</label>
                                <input type="text" id="country"/>
                            </div>
                        </div>

                        <div className='form-l2'>
                            <div className='two-column'>
                                <div className='group3'>
                                    <label for="date">Invoice Date</label>
                                    <input type="date" id="date"/>
                                </div>
                                <div className='group3'>
                                    <label for="client">Payment Terms</label>
                                    <input type="text" id="client"/>
                                </div>
                            </div>
                            
                            <div className='group1'>
                                <label for="client">Payment Description</label>
                                <input type="text" id="client"/>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BillTo;