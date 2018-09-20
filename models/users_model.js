const mongoose = require('mongoose');

/**
 * User Schema Model
 */
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dateOfBirth: {type: Date},
    email: {type: String, required: true, unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('Users', userSchema);