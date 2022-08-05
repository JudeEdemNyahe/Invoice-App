// import React from 'react'
// import './Item.css';
// import { ReactComponent as Delete } from '../../../../assets/icon-delete.svg';

// const Item = (props) => {
//     return (
//         <div className='item-container'>
//             <div className='item-form-container'>
//                 <div className='grp1'>
//                     <label for="name">Item Name</label>
//                     <input type="text" id="name" 
//                     onChange={props.onChange}
//                     />
//                 </div>

//                 <div className='item-props'>
//                     <div className='grp2'>
//                         <label for="qty">Qty</label>
//                         <input type="number" min="1" id="qty" 
//                         onChange={props.onChange}
//                         />
//                     </div>

//                     <div className='grp3'>
//                         <label for="price">Price</label>
//                         <input type="number" id="price" min="1" 
//                         onChange={props.onChange}
//                         />
//                     </div>

//                     <div className='grp4'>
//                         <h4 className='total-head'>Total</h4>
//                         <span id="i-total">1892222</span>
//                         {/* <label for="total">Total</label>
//                         <input type="number" id="total"/> */}
//                     </div>
//                     <Delete className="delBtn" />
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Item;