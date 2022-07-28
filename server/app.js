const express = require('express');
const morgan = require('morgan');
const app = express();
const invoiceRouter = require('./routes/invoiceRouter');
const cors = require('cors');
//Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Body Parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cors());


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
});

app.use('/api/v1/invoices', invoiceRouter);


// if an endpoint hits this middle ware an error is thrown with the message
app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can't find ${req.originalUrl} on this server`
    // })

    const err = new Error(`Can't find ${req.originalUrl} on this server`);
    err.status = 'fail';
    err.statusCode = 404;

    next(err);

});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })

})


module.exports = app