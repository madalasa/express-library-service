var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router.get('/:id', bookController.findBook)
      .put('/:id', bookController.updateBook)
      .delete('/:id', bookController.deleteBook);

router.get('/', bookController.findBooks)
       .post('/', bookController.createBook);

module.exports = router;