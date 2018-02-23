var express = require('express');
var router = express.Router();
var genreController = require('../controllers/genreController.js');

// var Genre = require('./models/genre');

router.get('/:id', genreController.findGenre)
      .put('/:id', genreController.updateGenre)
      .delete('/:id', genreController.deleteGenre);

router.get('/', genreController.findGenres)
       .post('/', genreController.addGenre);

module.exports = router;