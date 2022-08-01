import React, {Fragment} from 'react'
import './ItemList.css';
import {ReactComponent as Add} from '../../../assets/icon-plus.svg';

// Component
import Item from './Item/Item';

const ItemList = () => {
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
                <Item />
                <Item />
            </div>

            <button className='addItem'>
                <Add className='addIcon'/>
                <h4>Add New Item</h4>
            </button>
            
        </Fragment>
    )
}

export default ItemList;