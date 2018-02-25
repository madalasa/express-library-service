var Author = require('../models/author');

exports.createAuthor = function (req, res, next) {
    var author = new Author(req.body);
    Author.create(author, function(err, newAuthor) {
        if(err){
            console.log('err:'+err)
            next(err);
        }
        else{
            res.send(newAuthor);
        }
    });
}

exports.findAuthor = function (req, res, next) {
    Author.findById(req.params.id).exec(function (err, author) {
        if (err) {
            //TODO differentite between validation errors and server error
            res.status(500);
            res.send(err);
        }
        else {
            res.json(author);
        }
    });
}

exports.updateAuthor = function (req, res) {

    var author = new Author({
        _id: req.params.id,
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death,
        description: req.body.description
    });
    console.log('before:'+author);
    Author.findByIdAndUpdate(req.params.id, author, {}, function (err, author1) {
        if (err) {
            console.log('err:'+err);
            res.send(err);
        }
        else {            
            console.log('after:'+author1);
            res.sendStatus(200);
        }
    });
}

exports.deleteAuthor = function (req, res) {
    Author.findByIdAndRemove(req.params.id, function (err, author) {
        if (err) {
            res.send(err);
        }
        else {
            console.log('after:'+author);
            res.sendStatus(200);
        }
    });
}

exports.findAuthors = function (req, res) {
    console.log(req.query.ids);
    console.log(req.query.ids[0]);
    Author.find({'_id': {$in: req.query.ids}}).exec(function (err, author) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(author);
        }
    });
}