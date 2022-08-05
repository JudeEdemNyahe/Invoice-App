/* eslint-disable import/no-anonymous-default-export */
export default (invoices = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...invoices,action.payload];
        default:
            return invoices;

    }

}