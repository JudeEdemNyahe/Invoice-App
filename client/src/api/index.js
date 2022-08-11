import axios from 'axios'

const url = 'https://amalitech-invoice-app.herokuapp.com/api/v1/invoices';

export const fetchInvoices = () => axios.get(url);
export const createInvoice = (newInvoice) => axios.post(url, newInvoice);
export const filterInvoice = (searchQuery) => axios.get(`${url}?status=${searchQuery}`)
export const fetchInvoice = (id) => axios.get(`${url}/${id}`);
export const deleteInvoice = (id) => axios.delete(`${url}/${id}`);
export const updateInvoice = (id, updatedInvoice) => axios.patch(`${url}/${id}`, updatedInvoice);