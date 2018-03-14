var Book = require('../models/book');
var Genre = require('../models/genre');
var Author = require('../models/author');
var BookInstance = require('../models/bookinstance')
var async = require('async');

exports.createBook = function (req, res) {

    async.parallel({
        genre: function (callback) {
            Genre.findById(req.body.genre, callback).exec();
        },
        author: function (callback) {
            Author.find({ '_id': { $in: req.body.author } }, callback);
        }
    }, function (err, results) {
        var errors;

        if (err) {
            res.send(err);
        }
        else if (results.genre && results.author) {
            var book = new Book(req.body);
            Book.create(book).then(newBook => res.json(newBook));
        }
        else {
            console.log('invalid id:' + results);
            res.status = 422;
            var errors = {};
            if (!results.genre) {
                errors.genre = 'invalid genre';
            }
            if (!results.author) {
                errors.author = 'invalid author';
            }

            res.json(errors);
        }
    });

}

exports.findBook = function (req, res) {
    async.parallel({
        book: function (callback) {
            Book.findById(req.params.id)
                .populate('author')
                .populate('genre')
                .exec(callback)
        },
        bookInstance: function (callback) {
            BookInstance.find({ 'book': req.params.id })
                .exec(callback);
        }
    },
        function (err, results) {
            if (err) {
                console.log("error: "+JSON.stringify(err));
                res.status(500);
                res.send(err);
            }
            else {
                if (results.bookInstance) {
                    var finalBook = {
                        'book': results.book,
                        'bookinstances': results.bookInstance
                    };
                }

                res.send(finalBook);
            }
        }
    );
}

exports.updateBook = function (req, res) {
    var book = new Book({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
        description: req.body.description
    });

    console.log('before:' + book);
    Book.findByIdAndUpdate(req.params.id, book, {}, function (err, book1) {
        if (err) {
            console.log('err:' + err);
            res.send(err);
        }
        else {
            console.log('after:' + book1);
            res.code = 200;
            res.send();
        }
    });
}

exports.deleteBook = function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            console.log('after:' + book);
            res.code = 200;
            res.send();
        }
    });
}

exports.findBooks = function (req, res) {
    console.log(req.query.ids);
    console.log(req.query.ids[0]);
    Book.find({ '_id': { $in: req.query.ids } }).exec(function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(book);
        }
    });
}