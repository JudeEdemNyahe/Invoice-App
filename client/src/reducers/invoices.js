/* eslint-disable import/no-anonymous-default-export */
export default (invoices = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...invoices,action.payload];
        case 'FETCH_INVOICE':
             return action.payload
        case 'DELETE':
            return invoices.filter((invoice)=>invoice._id !== action.payload)
        
        default:
            return invoices;

    }

}