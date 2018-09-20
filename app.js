const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Path to the Routes which handles the requests
const bookRoutes = require('./routes/books_router');
const userRoutes = require('./routes/users_router');

// MongoDB Connection via Mongoose
mongoose.connect('mongodb://localhost/Book_Store',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

// Using morgan for logging purposes and body-parser also
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

// use() is a middleware to pass something [data] through it
app.use('/books',bookRoutes);
app.use('/users',userRoutes);

console.log("Server is Activated...");
module.exports = app;