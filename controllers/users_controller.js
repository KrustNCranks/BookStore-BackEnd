const mongoose = require('mongoose');
const User = require('../models/users_model');

/**
 * GET this will return all the Users
 * Most used for testing purposes and for Admin Purposes
 */
exports.get_all_users =(req,res,next)=>{
    User.find().select("firstname lastname dateOfBirth email username password").exec()
        .then(docs =>{
            const response = {
                count: docs.length,
                Books: docs.map(doc =>{
                    return{
                        _id: doc._id,
                        firstname: doc.firstname,
                        lastname: doc.lastname,
                        dateOfBirth: doc.dateOfBirth,
                        email: doc.email,
                        username: doc.username,
                        password: doc.password
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
 * POST this will post a new iTem to User
 */
exports.create_user = (req, res, next)=>{
    const book = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    book.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: "User has been Created",
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
