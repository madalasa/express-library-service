var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookinstanceSchema = new Schema({    
    book: { type: Schema.ObjectId, ref: 'Book', required: true },
    book_publisher: {type:String, required: true},
    status: {type: String, required: true, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
    due_date: {type: Date, default: Date.now},
  });
  
module.exports = mongoose.model('BookInstance', bookinstanceSchema);  