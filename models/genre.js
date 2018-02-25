var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 100},
    description: {type:String, maxlength: 300}
});

module.exports = mongoose.model('Genre', genreSchema);  