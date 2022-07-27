const Invoice = require('./../models/invoiceModel')
const APIFeatures = require('./../utils/apiFeatures')








exports.getAllInvoices = async(req, res, next) => {


    try {


        //Execute Query

        const features = new APIFeatures(Invoice.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()
        const invoices = await features.query;



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