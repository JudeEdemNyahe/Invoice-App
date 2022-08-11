import React, { Fragment, useState } from 'react'
import './ItemList.css';
import { ReactComponent as Add } from '../../../assets/icon-plus.svg';

// Component
// import Item from './Item/Item';
import { ReactComponent as Delete } from '../../../assets/icon-delete.svg';

const ItemList = ({ invoice, ...props }) => {
    const [itemList, setItemList] = useState([{ item: '' }]);

    const handleAddItem = () => {
        setItemList([...itemList, { item: '' }])
    }

    const handleRemoveItem = (index) => {
        const list = [...itemList]
        list.splice(index, 1)
        setItemList(list)
    }
    //console.log(invoice.items);
    return (
        <Fragment>
            <div className='items-container'>
                <h4 className='head'>Item Lists</h4>
                <div className='item-head'>
                    <div className='i-name'><h4>Item Name</h4></div>
                    <div className='i-qty'><h4>Qty.</h4></div>
                    <div className='i-price'><h4>Price</h4></div>
                    <div className='i-total'><h4>Total</h4></div>
                </div>

                {!invoice ? itemList.map((singleItem, index) => (
                    <div key={index} className='item-container'>
                        <div className='item-form-container'>
                            <div className='grp1'>
                                <label for="name">Item Name</label>
                                <input type="text" name="name" id="Itemname" data-id="items"
                                    //value={singleItem.item}
                                    onChange={props.onChange}
                                />
                            </div>
                            <div className='item-props'>
                                <div className='grp2'>
                                    <label for="quantity">quantity</label>
                                    <input type="number" name="quantity" min="1" id="quantity" data-id="items"
                                        // value={singleItem.item}
                                        onChange={props.onChange}
                                    />
                                </div>

                                <div className='grp3'>
                                    <label for="price">Price</label>
                                    <input type="number" id="price" min="1"
                                        // value={singleItem.item}
                                        onChange={props.onChange}
                                    />
                                </div>

                                <div className='grp4'>
                                    <h4 className='total-head'>Total</h4>
                                    <span id="i-total">{props.totalAmount}</span>
                                    {/* <label for="total">Total</label>
                                        <input type="number" id="total"/> */}
                                </div>
                                <Delete className="delBtn" onClick={() => handleRemoveItem(index)} />
                            </div>
                        </div>
                    </div>
                )) : invoice.items.map((singleItem, index) => (
                    <div key={index} className='item-container'>
                        <div className='item-form-container'>
                            <div className='grp1'>
                                <label for="name">Item Name</label>
                                <input type="text" id="Itemname" data-id="items" name='name'
                                    defaultValue={singleItem.name}
                                    onChange={props.onChange}
                                />
                            </div>
                            <div className='item-props'>
                                <div className='grp2'>
                                    <label for="quantity">Qty</label>
                                    <input type="number" min="1" id="quantity" data-id="items" name='quantity'
                                        defaultValue={singleItem.quantity}
                                        onChange={props.onChange}
                                    />
                                </div>

                                <div className='grp3'>
                                    <label for="price">Price</label>
                                    <input type="number" id="price" name='price' data-id="items"
                                        defaultValue={singleItem.price}
                                        onChange={props.onChange}
                                    />
                                </div>

                                <div className='grp4'>
                                    <h4 className='total-head'>Total</h4>
                                    <span id="i-total">{singleItem.total}</span>
                                    {/* <label for="total">Total</label>
                                        <input type="number" id="total"/> */}
                                </div>
                                <Delete className="delBtn" onClick={() => handleRemoveItem(index)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className='addItem' onClick={handleAddItem}>
                <Add className='addIcon' />
                <h4>Add New Item</h4>
            </button>

        </Fragment>
    )
}

export default ItemList;