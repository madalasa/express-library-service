var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 100},
    description: {type:String, max: 300}
});

module.exports = mongoose.model('Genre', genreSchema);  