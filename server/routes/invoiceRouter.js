const express = require('express');
const { getAllInvoices, getInvoice } = require('./../controllers/InvoiceController');

const router = express.Router();

router
    .route('/')
    .get(getAllInvoices)



module.exports = router