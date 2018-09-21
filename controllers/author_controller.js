const mongoose = require('mongoose');
const Author = require('../models/author_model');

/**
 * GET this will return all the Author
 */
exports.get_all_authors =(req,res,next)=>{
    Author.find().select("name dateOfBirth genre").exec()
        .then(docs =>{
            const response = {
                count: docs.length,
                Author: docs.map(doc =>{
                    return{
                        _id: doc._id,
                        name: doc.name,
                        dateOfBirth: doc.dateOfBirth,
                        genre: doc.genre
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
 * POST this will post a new iTem to Author
 */
exports.add_author = (req, res, next)=>{
    const author = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        genre: req.body.genre
    })
    author.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: "Author has been added",
            publisherDetails: result
        });
    })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}