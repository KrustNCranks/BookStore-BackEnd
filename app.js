const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Path to the Routes which handles the requests
const bookRoutes = require('./routes/books_router');
const userRoutes = require('./routes/users_router');
const genreRoutes = require('./routes/genre_router');
const publisherRoutes = require('./routes/publisher_router');

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
app.use('/genres',genreRoutes);
app.use('/publisher',publisherRoutes);


// If App reaches anywhere else but the specified paths, throw this error
app.use((req, res, next)=>{
    const error = new Error("Not Found, Check URL");
    error.status = 404;
    next(error);
});

// If there is any other error or database related errors
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

console.log("Server is Activated...");
module.exports = app;