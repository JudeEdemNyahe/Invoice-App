import React from 'react';
import './Item.css';

const Item = () => {
    return(
        <div className='item-container'>
            <div className='item-form-container'>
                <div className='grp1'>
                    <label for="name">Item Name</label>
                    <input type="text" id="name"/>
                </div>

                <div className='item-props'>
                    <div className='grp2'>
                        <label for="qty">Qty</label>
                        <input type="number" id="qty"/>
                    </div>

                    <div className='grp3'>
                        <label for="price">Price</label>
                        <input type="number" id="price"/>
                    </div>

                    <div className='grp4'>
                        {/* <span id="total">189</span> */}
                        <label for="total">Total</label>
                        <input type="number" id="total"/>
                    </div>
                    <button id="delBtn"><svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg></button>
                </div>
                {/* <button><svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg></button> */}
            </div>
        </div>
    )
}
export default Item;