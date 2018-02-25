var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: {type: String, required: true},
    author: [{ type: Schema.ObjectId, ref: 'Author', required: true }],
    isbn: {type: String, required: true},
    genre: { type: Schema.ObjectId, ref: 'Genre', required: true },
    description: {type: String, required: true, maxlength:2000}
});

module.exports = mongoose.model('Book', bookSchema);  