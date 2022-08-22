const mongoose = require('mongoose')

const validator = require('validator')

//schema model
const invoiceSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    paymentDue: {
        type: Date

    },
    description: {
        type: String,
        required: [true, 'An invoice must have a description']
    },
    paymentTerms: {
        type: String,
        default: '30'

    },
    clientName: {
        type: String,
        required: [true, 'Clients name is required'],
        trim: true,
        maxlength: [30, 'clients name must have less or equal 30 characters'],
        minlength: [3, 'clients name must have more or equal than 3 characters'],
    },
    clientEmail: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],

    },
    status: {
        type: String,
        lowercase: true,
        enum: ['pending', 'paid', 'draft'],
        default: 'pending'

    },
    senderAddress: {
        street: {
            type: String,
            required: [true, "Street address is required"],
        },
        city: {
            type: String,
            required: [true, "City name is required"],
        },
        postCode: {
            type: String,
            required: [true, "postCode is required"],
        },
        country: {
            type: String,
            required: [true, "Country location is required"],
        },
    },
    clientAddress: {
        street: {
            type: String,
            required: [true, "Street address is required"],
        },
        city: {
            type: String,
            required: [true, "City name is required"],
        },
        postCode: {
            type: String,
            required: [true, "postCode is required"],
        },
        country: {
            type: String,
            required: [true, "Country location is required"],
        },
    },
    items: {
        type: Array,
    },
    total: Number
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});



//Document middleware: runs before .save() and .create() cmd



//converts the payment due date to a more human readable format 
invoiceSchema.virtual('dueDate').get(function() {
    let event = new Date(this.paymentDue)
    const dateStr = event.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateStr;

});

//converts the invoice due date to a more human readable format 
invoiceSchema.virtual('invoiceDate').get(function() {
    let event = new Date(this.createdAt)
    const dateCreatedStr = event.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateCreatedStr;

});

//converts createdAt timestamp to a  yyyy-mm-date format
invoiceSchema.virtual('htmlDate').get(function() {
    let event = new Date(this.createdAt).toISOString().slice(0, 10)
    return event;
});



//generates a unique random id for each created user e.g# NK1231
invoiceSchema.pre('save', function(next) {
    let letters = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substring(0, 2)
        .toUpperCase();

    var numbers = Math.floor(1000 + Math.random() * 9000);

    let id = letters + numbers;

    if (!this.id || this.id === " ") {
        this.id = id
    }
    next()
})


//calculates payment due date by adding payment term days to createdAt to date.default is 30 is not given by user
invoiceSchema.pre('save', function(next) {
    let calcDueDate = new Date(this.createdAt);
    this.paymentDue = calcDueDate.setDate(calcDueDate.getDate() + Number.parseInt(this.paymentTerms));
    next()
})

//calculates the total for each item in the array
invoiceSchema.pre('save', function(next) {
    let itemTotal = 0
    this.items.map((item) => {
        itemTotal = +item.quantity * +item.price;
        item.total = itemTotal;
    })

    next()
})


//calculates the overall total by adding up total from each item total
invoiceSchema.pre('save', function(next) {
    let calcTotal = 0;
    this.items.map((item) => {
        calcTotal += item.total;
    });
    this.total = calcTotal;
    next()
})
const Invoice = mongoose.model('Invoice', invoiceSchema);


module.exports = Invoice;