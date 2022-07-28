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

        //e.g {{URL}}api/v1/invoices?status=pending&total[gte]=1000

        let query = Invoice.find(JSON.parse(queryStr))


        //2)Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');

            query = query.sort(sortBy)
                //e.g sort('total payterms') {{URL}}api/v1/invoices?status=pending&sort=-total,paymentTerms
        } else {
            query = query.sort('-createdAt')
        }

        //3)Field Limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-__v');
        }


        //4 Pagination 
        //{{URL}}api/v1/invoices?page=2&limit=3 i.e page number 2 with 10 results

        //page 1(1-10 result) page 2(11-20 result) page 3(21-30)...

        const page = +req.query.page || 1 //1 is a default value if user doesnt provide a page number
        const limit = +req.query.limit || 100
        const skip = (page - 1) * limit

        query = query.skip(skip).limit(limit)

        //if there are no results for that page
        if (req.query.page) {
            const numInvoices = await Invoice.countDocuments()
            if (skip >= numInvoices) throw new Error('This page does not exist')
        }

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