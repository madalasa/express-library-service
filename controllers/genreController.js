var Genre = require('../models/genre');
/*
 * TODO perform validation 
 */
exports.createGenre = function (req, res) {
    var genre = new Genre(req.body);
    Genre.create(genre).then(newGenre => res.json(newGenre));
}

exports.findGenre = function (req, res) {
    Genre.findById(req.params.id).exec(function (err, genre) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(genre);
        }
    });
}

exports.updateGenre = function (req, res) {

    var genre = new Genre({
        _id: req.params.id,
        name: req.body.name, 
        description: req.body.description
    });
    console.log('before:'+genre);
    Genre.findByIdAndUpdate(req.params.id, genre, {}, function (err, genre1) {
        if (err) {
            console.log('err:'+err);
            res.send(err);
        }
        else {            
            console.log('after:'+genre1);
            res.sendStatus(200);
        }
    });
}

exports.deleteGenre = function (req, res) {
    Genre.findByIdAndRemove(req.params.id, function (err, genre) {
        if (err) {
            res.send(err);
        }
        else {
            console.log('after:'+genre);
            res.sendStatus(200);
        }
    });
}

exports.findGenres = function (req, res) {
    console.log(req.query.ids);
    console.log(req.query.ids[0]);
    Genre.find({'_id': {$in: req.query.ids}}).exec(function (err, genre) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(genre);
        }
    });
}