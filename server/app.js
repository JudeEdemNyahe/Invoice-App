
const express = require("express");
const morgan = require("morgan");

const app = express();
const cors = require("cors");
const invoiceRouter = require("./routes/invoiceRouter");
const AppError = require("./utils/apiError");
const globalErrorhandler = require("./controllers/errorController");

//Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//Body Parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(cors());


app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
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