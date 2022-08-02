const AppError = require("./../utils/apiError");

const handleCastErrorDB = err => {
    //transform wierd error to human readable error
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
}

const handleDuplicateFields = err => {
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another value`
    return new AppError(message, 400);
}

const handleValidationErrorDb = err => {
    //loop through validation errors
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
}



const sendDevError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}



const sendProdError = (err, res) => {
    //Operational errors to be sent to client 
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })

        //programming error or unknown errors
    } else {
        //1) log error

        console.error('Error 💥', err)

        //2)send generic message
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong somewhere!'
        })
    }



}









module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(err.stack);

    if (process.env.NODE_ENV === 'development') {
        sendDevError(err, res)



    } else if (process.env.NODE_ENV === 'production') {

        let error = {...err};
        error.message = err.message;
        if (err.name === 'CastError') error = handleCastErrorDB(err);
        if (err.code === 11000) error = handleDuplicateFields(err);
        if (err.name === 'ValidationError') error = handleValidationErrorDb(err);

        sendProdError(error, res)
    }





}