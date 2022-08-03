const mongoose = require('mongoose')
const slugify = require('slugify')
const validator = require('validator')

const invoiceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    paymentDue: {
        type: Date,
        default: Date.now(),

    },
    description: {
        type: String,
        required: [true, 'An invoice must have a description']
    },
    paymentTerms: {
        type: String,
        required: [true, 'An invoice must have a payterm'],
        enum: {
            values: [1, 7, 14, 30],
            message: "Payment term is either: 1"
        }

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
        enum: ['pending', 'paid', 'draft']

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


invoiceSchema.pre('save', function() {
    let calcTotal = 0;
    this.items.map((item) => {
        calcTotal += item.total;
    });
    this.total = calcTotal;

})

invoiceSchema.virtual('dueDate').get(function() {
    const dateStr = this.paymentDue.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateStr

});
invoiceSchema.virtual('invoiceDate').get(function() {
    const dateCreatedStr = this.createdAt.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateCreatedStr

});




const Invoice = mongoose.model('Invoice', invoiceSchema);


module.exports = Invoice;