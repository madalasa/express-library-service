var Genre = require('../models/genre');
/*
 * TODO how to do validation 
 */
exports.createGenre = function(req, res) {    
    var genre = new Genre(req.body);
    Genre.create(genre).then(newGenre => res.json(newGenre));    
}

exports.findGenre = function(req, res) {
    console.log(req.params.id);
    Genre.findById(req.params.id).exec(function(err, genre) {
        if (err){
          res.send(err);
        }
        else{
        res.json(genre);
        }
      });
}