const AppError = require('../utils/apiError');
const Invoice = require('./../models/invoiceModel');
const APIFeatures = require('./../utils/apiFeatures');
const hookAsync = require('./../utils/hookAsync');







exports.getAllInvoices = hookAsync(async(req, res, next) => {

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



})


exports.createInvoice = hookAsync(async(req, res, next) => {

    const invoice = await Invoice.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            invoice
        }
    });


});


exports.getAnInvoice = hookAsync(async(req, res, next) => {


    let invoice = await Invoice.findById(req.params.id)
        // invoice.findOne({ _id: req.params.id }) in mongo.. moongoose version findById

    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404))
    }






    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });

})


exports.updateAnInvoice = hookAsync(async(req, res, next) => {
    itemTotal = 0
    if (!req.body.status) {
        req.body.status = "pending"
    }

    if (req.body.items) {
        req.body.items.map((item) => {
            itemTotal = +item.quantity * +item.price;
            item.total = itemTotal;
        })

    }



    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });


    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404))
    }


    await invoice.save()

    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });

})


exports.deleteAnInvoice = hookAsync(async(req, res, next) => {

    const invoice = await Invoice.findByIdAndDelete(req.params.id);

    if (!invoice) {
        return next(new AppError('No invoice found with that ID', 404))
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
})