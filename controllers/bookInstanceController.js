var BookInstance = require('../models/bookinstance');
var Book = require('../models/book');

exports.createBookInstance = function (req, res) {
    var bookInstance = new BookInstance(req.body);
    Book.findById(req.body.book).exec(function (err, book) {
        if (err) {
            err;
        }
        else {
            BookInstance.create(bookInstance, function (err, newBookInstance) {
                if (err) {
                    res.status(500);
                    res.send(err);
                }
                else {
                    res.json(newBookInstance);
                }
            })
        }
    })
}

exports.findBookInstance = function (req, res) {
    BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function (err, bookInstance) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(bookInstance);
        }
    });
}

exports.updateBookInstance = function (req, res) {
    var bookInstance = new BookInstance({
        _id: req.params.id,
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
        description: req.body.description
    });

    console.log('before:' + bookInstance);
    BookInstance.findByIdAndUpdate(req.params.id, bookInstance, {}, function (err, bookInstance1) {
        if (err) {
            console.log('err:' + err);
            res.send(err);
        }
        else {
            console.log('after:' + bookInstance1);
            res.sendStatus(200);
        }
    });
}

exports.deleteBookInstance = function (req, res) {
    BookInstance.findByIdAndRemove(req.params.id, function (err, bookInstance) {
        if (err) {
            res.send(err);
        }
        else {
            console.log('after:' + bookInstance);
            res.sendStatus(200);
        }
    });
}

exports.findBookInstances = function (req, res) {
    console.log(req.query.ids);
    console.log(req.query.ids[0]);
    BookInstance.find({ '_id': { $in: req.query.ids } })
    .exec(function (err, bookInstance) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(bookInstance);
        }
    });
}