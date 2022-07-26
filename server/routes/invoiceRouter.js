const express = require('express');
const { getAllInvoices, createInvoice, getAnInvoice } = require('./../controllers/InvoiceController');

const router = express.Router();

router
    .route('/')
    .get(getAllInvoices)
    .post(createInvoice)


router
    .route('/:id')
    .get(getAnInvoice)

module.exports = router;