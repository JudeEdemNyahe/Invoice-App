const express = require("express");
const morgan = require("morgan");
const monogoSanitize = require('express-mongo-sanitize');
const app = express();
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require("compression")
const invoiceRouter = require("./routes/invoiceRouter");
const AppError = require("./utils/apiError");
const globalErrorhandler = require("./controllers/errorController");

//Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
const limiter = rateLimit({
    max: 800,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this Ip, please try again in an hour!'
});
app.use(cors());
//Body Parser, reading data from body into req.body
app.use('/api', limiter);
app.use(express.json({ limit: "10kb" }));
//Data sanitization against nosql query injection
app.use(monogoSanitize());

//Data sanitization against xss
app.use(xss());

app.use(compression())

app.use(hpp({
    whitelist: ['status', 'total', 'clientName']
}));


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    next();
});

app.use("/api/v1/invoices", invoiceRouter);

// if an endpoint hits this middle ware an error is thrown with the message
app.all("*", (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can't find ${req.originalUrl} on this server`
    // })

    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorhandler);

module.exports = app;