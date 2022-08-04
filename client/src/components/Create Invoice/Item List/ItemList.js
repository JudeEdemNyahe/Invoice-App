import React, {Fragment} from 'react'
import './ItemList.css';
import {ReactComponent as Add} from '../../../assets/icon-plus.svg';

// Component
// import Item from './Item/Item';
import { ReactComponent as Delete } from '../../../assets/icon-delete.svg';

const ItemList = (props) => {
    return(
        <Fragment>
            <div className='items-container'>
                <h4 className='head'>Item Lists</h4>
                <div className='item-head'>
                    <div className='i-name'><h4>Item Name</h4></div>
                    <div className='i-qty'><h4>Qty.</h4></div>
                    <div className='i-price'><h4>Price</h4></div>
                    <div className='i-total'><h4>Total</h4></div>
                </div>
                <div className='item-container'>
            <div className='item-form-container'>
                <div className='grp1'>
                    <label for="name">Item Name</label>
                    <input type="text" id="name" 
                    onChange={props.onChange}
                    />
                </div>

                <div className='item-props'>
                    <div className='grp2'>
                        <label for="qty">Qty</label>
                        <input type="number" min="1" id="qty" 
                        onChange={props.onChange}
                        />
                    </div>

                    <div className='grp3'>
                        <label for="price">Price</label>
                        <input type="number" id="price" min="1" 
                        onChange={props.onChange}
                        />
                    </div>

                    <div className='grp4'>
                        <h4 className='total-head'>Total</h4>
                        <span id="i-total">1892222</span>
                        {/* <label for="total">Total</label>
                        <input type="number" id="total"/> */}
                    </div>
                    <Delete className="delBtn" />
                </div>
            </div>
        </div>
            </div>

            <button className='addItem'>
                <Add className='addIcon'/>
                <h4>Add New Item</h4>
            </button>
            
        </Fragment>
    )
}

export default ItemList;