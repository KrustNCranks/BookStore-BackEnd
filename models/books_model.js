const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

/**
 * Book Schema Model
 */
const SchemaTypes = mongoose.Schema.Types;
const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    author: {type: String},
    description: {type: String},
    publisher: {type: String},
    cost: {type: SchemaTypes.Double, required: true},
    bookType: {type: String},
    genre: {type: String},
    image_url: {type: String},
    isbn: {type: String}

})

module.exports = mongoose.model('Books', bookSchema);