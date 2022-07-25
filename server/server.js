const dotenv = require('dotenv')
dotenv.config({ path: './config.env' }) // retrieving protected variables from config file

const app = require('./app')
const mongoose = require('mongoose') //for manipulating our mongodb
const PORT = process.env.PORT || 5000;


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successfully'));



//Start Server
const server = app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
});