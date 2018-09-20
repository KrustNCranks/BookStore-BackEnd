const mongoose = require('mongoose');

/**
 * Genre Schema Model
 */
const genreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true}
})

module.exports = mongoose.model('Genres', genreSchema);