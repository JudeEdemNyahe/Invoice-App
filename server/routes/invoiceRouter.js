const express = require('express');
const { getAllInvoices, createInvoice, getAnInvoice, updateAnInvoice, deleteAnInvoice } = require('./../controllers/InvoiceController');

const router = express.Router();

router
    .route('/')
    .get(getAllInvoices)
    .post(createInvoice)


router
    .route('/:id')
    .get(getAnInvoice)
    .patch(updateAnInvoice)
    .delete(deleteAnInvoice)

    
module.exports = router;