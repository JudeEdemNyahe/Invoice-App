import * as api from './../api';

//Action Creators
export const getInvoice = (id) => async (dispatch) => {

    try {
        const { data } = await api.fetchInvoice(id);

        dispatch({ type: 'FETCH_INVOICE', payload: data.data })
    } catch (error) {
        console.log(error);
    }

}


export const getInvoices = () => async(dispatch) => {

    try {
     
        const { data } = await api.fetchInvoices();

        dispatch({ type: 'FETCH_ALL', payload: data.data.invoices })
    } catch (error) {
        console.log(error);
    }



}

export const filterInvoices = (filterType) => async (dispatch) => {

    try {

        const { data } = await api.filterInvoice(filterType);

        dispatch({ type: 'FILTER_INVOICES', payload: data.data.invoices })
    } catch (error) {
        console.log(error);
    }



}


export const CreateAnInvoice = (invoice) => async(dispatch) => {

    try {
        const { data } = await api.createInvoice(invoice);

        dispatch({ type: 'CREATE', payload: data.data.invoice })
    } catch (error) {
        console.log(error);
    }



}





export const deleteAnInvoice = (id) => async(dispatch) => {
    try {
        await api.deleteInvoice(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }

}


export const updateInvoice = (id, invoice) => async(dispatch) => {
    try {
        const { data } = await api.updateInvoice(id, invoice);
        dispatch({ type: 'UPDATE', payload: data.data.invoice })
        
    } catch (error) {
        console.log(error);
    }
};





