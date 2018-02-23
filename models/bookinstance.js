var mongoose = require('mongoose');

/*
1) What is a good data model design, seems like we are creating a collection 
for each model and then refer to the object id. Wouldnt this result in multiple queries 
for example getting author -> will have to bring books

2) If we are following a schema, fi we have to change or add a field how does that affect data 
already in the collection
*/
var Schema = mongoose.Schema;

var bookinstanceSchema = new Schema({    
    book: { type: Schema.ObjectId, ref: 'Book', required: true },
    bookprint: {type:String, required: true},
    status: {type: String, required: true, enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
    due_date: {type: Date, default: Date.now},
  });
  
module.exports = mongoose.model('BookInstance', bookinstanceSchema);  