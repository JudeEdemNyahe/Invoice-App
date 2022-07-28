class APIFeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    filter() {
        //BUILD QUERY
        const queryObj = {...this.queryString } //destructuring to get a copy of request query 

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


        this.query = this.query.find(JSON.parse(queryStr))
            // let query = Invoice.find(JSON.parse(queryStr))
        return this;
    }

    sort() {
        //2)Sorting
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');

            this.query = this.query.sort(sortBy)
                //e.g sort('total payterms') {{URL}}api/v1/invoices?status=pending&sort=-total,paymentTerms
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    limitFields() {
        //3)Field Limiting
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }

        return this
    }

    paginate() {
        //4 Pagination 
        //{{URL}}api/v1/invoices?page=2&limit=3 i.e page number 2 with 10 results

        //page 1(1-10 result) page 2(11-20 result) page 3(21-30)...

        const page = +this.queryString.page || 1 //1 is a default value if user doesnt provide a page number
        const limit = +this.queryString.limit || 100
        const skip = (page - 1) * limit

        this.query = this.query.skip(skip).limit(limit)
        return this

    }



}


module.exports = APIFeatures;