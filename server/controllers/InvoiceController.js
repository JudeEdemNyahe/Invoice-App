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
            data: invoice
        }
    });


});


exports.getAnInvoice = async(req, res, next) => {


    let invoice = await Invoice.findById(req.params.id)
        // Tour.findOne({ _id: req.params.id }) in mongo.. moongoose version findById

    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });

}


exports.updateAnInvoice = hookAsync(async(req, res, next) => {

    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    res.status(200).json({
        status: 'success',
        data: {
            invoice
        }
    });
    
})