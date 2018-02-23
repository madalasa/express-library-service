var express = require('express');
var router = express.Router();
/*
TODO - 
a) later understand how to limit the id size or the number
 of books or when just /books how to limit the response?
b) what to do with unsupported requests
c) probably later implement oauth scope for some of these operations

    /books/:id - GET, PUT, DELETE
    /books - GET , POST, PUT, DELETE


    What would be the data schema model in mongodb
    if author as the main doc -> then could be multuple authors for the same book
    if book - then how would you write queries like books by author, books by genre etc?
*/
router.get('/:id', function(req, res, next){});
router.put('/:id', function(req, res, next){});
router.delete('/:id', function(req, res, next){});

router.get('/', function(req, res, next){res.json({author: 'Madhu'})});
router.post('/', function(req, res, next){});
router.put('/', function(req, res, next){});
router.delete('/', function(req, res, next){});

module.exports = router;