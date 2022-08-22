/* eslint-disable import/no-anonymous-default-export */
export default (invoices = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload

        case 'FILTER_INVOICES':
            return action.payload;

        case 'CREATE':
            return [...invoices, action.payload];

        case 'UPDATE':
            const newData = [invoices]
            return newData.map((invoice) => (invoice._id === action.payload._id ? action.payload : invoice));

        case 'FETCH_INVOICE':

            return action.payload.invoice
        case 'DELETE':

            return invoices.filter((invoice) => invoice._id !== action.payload)

        case 'CLEAR_INVOICES':
            return invoices = [];
        default:
            return invoices;

    }

}