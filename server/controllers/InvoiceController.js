const Invoice = require('./../models/invoiceModel')

exports.getAllInvoices = async(req, res, next) => {


    try {
        //BUILD QUERY
        const queryObj = {...req.query } //destructuring to get a copy of request query 

        const excludedFields = ['page', 'sort', 'limit', 'fields']; //we will remove this field from our query  by looping

        excludedFields.forEach(el => delete queryObj[el])



        //ModelSchema.find() cmd gets all document in our database

        //Alternate
        //const query =Invoice.find()
        //                .where('status')
        //.equals('pending') or 'draft'


        //Advanced filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);



        const query = Invoice.find(JSON.parse(queryStr))


        //Execute Query
        const invoices = await query;

        //Send Response
        res.status(200).json({
            status: 'success',
            results: invoices.length,
            data: {
                invoices
            }

        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }



}

exports.createInvoice = async(req, res, next) => {

    try {
        const invoice = await Invoice.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                data: invoice
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }


}


exports.getAnInvoice = async(req, res, next) => {
    try {

        let invoice = await Invoice.findById(req.params.id)
            // Tour.findOne({ _id: req.params.id }) in mongo.. moongoose version findById

        res.status(200).json({
            status: 'success',
            data: {
                invoice
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}