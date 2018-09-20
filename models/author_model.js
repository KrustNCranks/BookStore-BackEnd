const mongoose = require('mongoose');

/**
 * Author Schema model
 */
const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    dateOfBirth: {type: Date},
    genre: {type: String}
})

module.exports = mongoose.model('Authors',authorSchema);