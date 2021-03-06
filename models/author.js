var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var authorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: {type: String, required: true, max: 100},
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
    description: {type:String, maxlength:600},
});

module.exports = mongoose.model('Author', authorSchema);  