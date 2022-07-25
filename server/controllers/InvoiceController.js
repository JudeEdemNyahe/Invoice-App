const Invoice = require('./../models/invoiceModel')

exports.getAllInvoices = async(req, res, next) => {


    try {

        const invoices = await Invoice.find()
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

exports.getInvoice = (req, res, next) => {


    res.status(200).json({
        status: 'success for getting an invoice'
    })


}