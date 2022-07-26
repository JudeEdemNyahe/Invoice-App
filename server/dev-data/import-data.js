const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const Invoice = require('./../models/invoiceModel');

//connection to connect to database;
//process.env.DATABASE_PASSWORD variable from config will replace the <PASSWORD>
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB connection successful'));

//Read File from data.json
const invoices = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// call function to import data into our database
//request is done asynchronously inorder not to block the event loop

const importData = async() => {
    try {
        await Invoice.create(invoices); //create invoices from our dev data to our mongodb 
        console.log("Data successful loaded")
    } catch (err) {
        console.log(err)
    }
    process.exit()


}

//DELETE ALL DATA FROM DB

const deleteData = async() => {
    try {
        await Invoice.deleteMany();
        console.log("Data successfully Deleted")

    } catch (err) {
        console.log(err)
    }
    process.exit()
}

if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}