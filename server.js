const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});
connectDB();

const transactions = require("./routes/transactions"); 
const { dirname } = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV ==="development") {
    app.use(morgan('dev'))
}


app.use("/api/v1/transactions", transactions);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`.yellow.italic)
})