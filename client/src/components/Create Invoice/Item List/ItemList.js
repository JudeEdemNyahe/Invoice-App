import React, {Fragment} from 'react'
import './ItemList.css';

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
                <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
                <h4>Add New Item</h4>
            </button>
            
        </Fragment>
    )
}

export default ItemList;