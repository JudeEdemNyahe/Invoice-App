const mongoose = require('mongoose')
const slugify = require('slugify')
const validator = require('validator')

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




invoiceSchema.virtual('dueDate').get(function() {
    let event = new Date(this.paymentDue)
    const dateStr = event.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateStr;

});
invoiceSchema.virtual('invoiceDate').get(function() {
    let event = new Date(this.createdAt)
    const dateCreatedStr = event.toLocaleDateString('en-uk', { day: "numeric", month: "short", year: "numeric", })
    return dateCreatedStr;

});





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


invoiceSchema.pre('save', function(next) {
    let calcDueDate = new Date(this.createdAt);
    this.paymentDue = calcDueDate.setDate(calcDueDate.getDate() + Number.parseInt(this.paymentTerms));
    next()
})

invoiceSchema.pre('save', function(next) {
    let itemTotal = 0
    this.items.map((item) => {
        itemTotal = item.quantity * item.price;
        item.total = itemTotal;
    })

    next()
})



const Invoice = mongoose.model('Invoice', invoiceSchema);


module.exports = Invoice;