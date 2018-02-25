var express = require('express');
var router = express.Router();

var authorController = require('../controllers/authorController');

router.get('/:id', authorController.findAuthor)
      .put('/:id', authorController.updateAuthor)
      .delete('/:id', authorController.deleteAuthor);

router.get('/', authorController.findAuthors)
       .post('/', authorController.createAuthor);

module.exports = router;