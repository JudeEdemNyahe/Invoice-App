//extends in built Error class
class AppError extends Error {
    // constructor method is called each time we create a new object out of this class
    constructor(message, statusCode) {
        //in order to get the parent constructor we call super
        super(message);
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        this.isOperational = true;

        //this for current object
        Error.captureStackTrace(this, this.constructor);

    }



}

module.exports = AppError;