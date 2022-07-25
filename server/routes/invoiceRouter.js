const express = require('express');
const { getAllInvoices } = require('./../controllers/InvoiceController');

const router = express.Router();

router
    .route('/')
    .get(getAllInvoices)


module.exports = router