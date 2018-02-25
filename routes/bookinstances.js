var express = require('express');
var router = express.Router();


var bookInstanceController = require('../controllers/bookInstanceController');

router.get('/:id', bookInstanceController.findBookInstance)
      .put('/:id', bookInstanceController.updateBookInstance)
      .delete('/:id', bookInstanceController.deleteBookInstance);

router.get('/', bookInstanceController.findBookInstances)
       .post('/', bookInstanceController.createBookInstance);

module.exports = router;