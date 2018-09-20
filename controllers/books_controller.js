const mongoose = require('mongoose');
const Book = require('../models/books_model');


/**
 * GET this will return all the books
 */
exports.get_all_books =(req,res,next)=>{
    Book.find().select("name description cost bookType category image_url").exec()
        .then(docs =>{
            const response = {
                count: docs.length,
                Books: docs.map(doc =>{
                    return{
                        _id: doc._id,
                        name: doc.name,
                        description: doc.description,
                        cost: doc.cost,
                        bookType: doc.bookType,
                        category: doc.category,
                        image_url: doc.image_url
                    }
                })
            }
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

/**
 * POST this will post a new iTem to Books
 */
exports.post_book = (req, res, next)=>{
    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        bookType: req.body.bookType,
        category: req.body.category,
        image_url: req.body.image_url
    })
    book.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: "Book has been added",
            bookDetails: result
        });
    })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}
