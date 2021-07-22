const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env'})

const app = express();

app.get("/", (req, res) => {
    res.write("<h1>Aur launde<h1/>")
    res.send();
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`.yellow.italic)
})