const express = require('express');
const { getAllInvoices, createInvoice, getAnInvoice, updateAnInvoice } = require('./../controllers/InvoiceController');

const router = express.Router();

router
    .route('/')
    .get(getAllInvoices)
    .post(createInvoice)


router
    .route('/:id')
    .get(getAnInvoice)
    .patch(updateAnInvoice)

    
module.exports = router;