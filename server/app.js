const express = require('express')
const morgan = require('morgan')
const app = express()
const invoiceRouter = require('./routes/invoiceRouter')
    //Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Body Parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
});

app.use('/api/v1/invoices', invoiceRouter)

module.exports = app