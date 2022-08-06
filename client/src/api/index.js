import axios from 'axios'

const url = 'https://amalitech-invoice-app.herokuapp.com/api/v1/invoices';

export const fetchInvoices = () => axios.get(url);
export const createInvoice=(newInvoice)=>axios.post(url,newInvoice);
export const fetchInvoice = (id) => axios.get(`${url}/${ id }`)