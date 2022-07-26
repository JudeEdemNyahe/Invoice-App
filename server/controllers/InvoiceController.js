const Invoice = require('./../models/invoiceModel')

exports.getAllInvoices = async(req, res, next) => {


    try {
        //BUILD QUERY
        const queryObj = {...req.query } //destructuring to get a copy of request query 

        const excludedFields = ['page', 'sort', 'limit', 'fields']; //we will remove this field from our query  by looping

        excludedFields.forEach(el => delete queryObj[el])

        //console.log(req.query, queryObj);


        //ModelSchema.find() cmd gets all document in our database
        const query = Invoice.find(queryObj)

        //Alternate
        //const query =Invoice.find()
        //                .where('status')
        //.equals('pending') or 'draft'



        const invoices = await query

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