import React, { Fragment } from 'react';
import './BillFrom.css';

const BillFrom = ({ invoice, ...props }) => {
    return (
        <Fragment>
            <div className='bill-from-container'>
                <h4 className='head'>Bill From</h4>
                <div className='from-container'>
                    <form>
                        <div className='f-group1'>
                            <label for="street">Street Address</label>
                            <input type="text" id="street" defaultValue={invoice && invoice.senderAddress.street}
                                onChange={props.onChange}
                            />
                        </div>

                        <div className='from-l3'>
                            <div className='f-group2'>
                                <label for="city">City</label>
                                <input type="text" id="city" defaultValue={invoice && invoice.senderAddress.city}
                                    onChange={props.onChange}
                                />
                            </div>

                            <div className='f-group2'>
                                <label for="postCode">Post Code</label>
                                <input type="text" id="postCode" defaultValue={invoice && invoice.senderAddress.postCode}
                                    onChange={props.onChange}
                                />
                            </div>

                            <div className='f-group2' id='from-country'>
                                <label for="country">Country</label>
                                <input type="text" id="country" defaultValue={invoice && invoice.senderAddress.country}
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

export default BillFrom;