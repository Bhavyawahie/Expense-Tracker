const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env'});

const transactions = require("./routes/transactions") 

const app = express();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`.yellow.italic)
})