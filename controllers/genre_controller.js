const mongoose = require('mongoose');
const Genre = require('../models/genre_model');

/**
 * GET this will return all the Genres
 */
exports.get_all_genres =(req,res,next)=>{
    Genre.find().select("name").exec()
        .then(docs =>{
            const response = {
                count: docs.length,
                Genres: docs.map(doc =>{
                    return{
                        _id: doc._id,
                        name: doc.name
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
 * POST this will post a new iTem to Genres
 */
exports.add_genre = (req, res, next)=>{
    const genre = new Genre({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    genre.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: "Genre has been added",
            genreDetails: result
        });
    })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}