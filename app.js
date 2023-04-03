const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './.env'});
connectDB();

const transactions = require("./routes/transactions"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV ==="development") {
    app.use(morgan('dev'))
}

app.use("/api/v1/transactions", transactions);


module.exports = app