import React, {Fragment} from 'react';
import './BillFrom.css';

const BillFrom = () => {
    return(
        <Fragment> 
            <div className='bill-from-container'>
                < h4 className='head'>Bill From</h4>
                <div className='from-container'>
                    <form>
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
        
                            <div className='group2'>
                                <label for="country">Country</label>
                                <input type="text" id="country"/>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </Fragment>
    )
}

export default BillFrom;