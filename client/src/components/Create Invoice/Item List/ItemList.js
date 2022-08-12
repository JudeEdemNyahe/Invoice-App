import React, { Fragment } from 'react';
import './ItemList.css';
import { ReactComponent as Add } from '../../../assets/icon-plus.svg';

// Component
// import Item from './Item/Item';
import { ReactComponent as Delete } from '../../../assets/icon-delete.svg';

const ItemList = ({ invoice, newInvoice, setNewInvoice, setInvoiceData,invoiceData,...props }) => {
   // const [newInvoice, setNewInvoice] = useState([{ name: "" }]);

  const handleAddItem = (event) => {
    event.preventDefault();
   if(invoice){
   
       setInvoiceData({ items: [...invoiceData.items, { name: ''}] });

   }
  else{
       setNewInvoice({...newInvoice,items: [...newInvoice.items, { name: '' }] });

  }
    };

    const handleItemsChange = (e, index) => {
        const { name, value } = e.target;
  if(invoice){
      const list = [...invoiceData.items];

      list[index][name] = value;
      setInvoiceData({ ...invoiceData, items: list });
  }else{
      const list = [...newInvoice.items];

      list[index][name] = value;
      setNewInvoice({ ...newInvoice, items: list });
  }
    };

  const handleRemoveItem = (index) => {
   if(invoice){
       const list = [...invoiceData.items];
       list.splice(index, 1);
       setInvoiceData({ ...invoiceData, items: list });
   }else{
      // console.log(newInvoice.items);
       const list = [...newInvoice.items];
       list.splice(index, 1);
       setNewInvoice({...newInvoice,items:list});
     
   }
  };

  


  
return (
    <Fragment>
      <div className="items-container">
        <h4 className="head">Item Lists</h4>
        <div className="item-head">
          <div className="i-name">
            <h4>Item Name</h4>
          </div>
          <div className="i-qty">
            <h4>Qty.</h4>
          </div>
          <div className="i-price">
            <h4>Price</h4>
          </div>
          <div className="i-total">
            <h4>Total</h4>
          </div>
        </div>

        {!invoice
          ?
           newInvoice.items.map((singleItem, index) => (
            
              <div key={index} className="item-container">
                   
                <div className="item-form-container">
                  <div className="grp1">
                    <label htmlFor="name">Item Name</label>
                    <input
                      type="text"
                      name="name"
                      id="Itemname"
                      data-id="items"
                      //value={singleItem.item}
                      
                 onChange={(e) => handleItemsChange(e, index)}
                    />
                  </div>
                  <div className="item-props">
                    <div className="grp2">
                      <label htmlFor="quantity">quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        id="quantity"
                        data-id="items"
                        // value={singleItem.item}
                         onChange={(e) => handleItemsChange(e, index)}
                      />
                    </div>

                    <div className="grp3">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        id="price"
                        min="1"
                        data-id="items"
                        // value={singleItem.item}
                        name='price'
                        onChange={(e) => handleItemsChange(e, index)}
                      />
                    </div>

                    <div className="grp4">
                      <h4 className="total-head">Total</h4>
                      <span id="i-total">{props.totalAmount}</span>
                      {/* <label htmlFor="total">Total</label>
                                        <input type="number" id="total"/> */}
                    </div>
                           {newInvoice.items.length !== 1 && (

                               <Delete className="delBtn" onClick={() => handleRemoveItem(index)} />
                           )}

                  </div>
                </div>
              </div>
            ))
                : invoiceData.items.map((singleItem, index) => (
              <div key={index} className="item-container">
                <div className="item-form-container">
                  <div className="grp1">
                    <label htmlFor="name">Item Name</label>
                    <input
                      type="text"
                      id="Itemname"
                      data-id="items"
                      name="name"
                     defaultValue={singleItem.name}
                     onChange={(e) => handleItemsChange(e, index)}
                    />
                  </div>
                  <div className="item-props">
                    <div className="grp2">
                      <label htmlFor="quantity">Qty</label>
                      <input
                        type="number"
                        min="1"
                        id="quantity"
                        data-id="items"
                        name="quantity"
                         defaultValue={singleItem.quantity}
                                  onChange={(e) => handleItemsChange(e, index)}
                      />
                    </div>

                    <div className="grp3">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        id="price"
                        data-id="items"
                           name="price"
                        defaultValue={singleItem.price}
                                  onChange={(e) => handleItemsChange(e, index)}
                      />
                    </div>

                    <div className="grp4">
                      <h4 className="total-head">Total</h4>
                      <span id="i-total">{singleItem.total}</span>
                      {/* <label htmlFor="total">Total</label>
                                        <input type="number" id="total"/> */}
                    </div>
                          {invoice.items.length !== 1 && (
                           
                               <Delete className="delBtn" onClick={() => handleRemoveItem(index)} />
                          )}
                   
                  </div>
                </div>
              </div>
            ))}
      </div>

        <button type="button" className="addItem" onClick={handleAddItem}>
        <Add className="addIcon" />
        <h4>Add New Item</h4>
      </button>
    </Fragment>
  );
};

export default ItemList;
