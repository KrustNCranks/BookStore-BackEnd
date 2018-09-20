const mongoose = require('mongoose');

/**
 * Publisher Schema Model
 */
const publisherSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true}
})

module.exports = mongoose.model('Publishers',publisherSchema);