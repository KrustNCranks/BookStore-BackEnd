const mongoose = require('mongoose');
const Publisher = require('../models/publisher_model');

/**
 * GET this will return all the Publisher
 */
exports.get_all_publishers =(req,res,next)=>{
    Publisher.find().select("name").exec()
        .then(docs =>{
            const response = {
                count: docs.length,
                Publisher: docs.map(doc =>{
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
 * POST this will post a new iTem to Publishers
 */
exports.add_publisher = (req, res, next)=>{
    const genre = new Publisher({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    genre.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: "Publisher has been added",
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