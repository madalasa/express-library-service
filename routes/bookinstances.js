var express = require('express');
var router = express.Router();


router.get('/:id', function(req, res, next){});
router.put('/:id', function(req, res, next){});
router.delete('/:id', function(req, res, next){});

router.get('/', function(req, res, next){res.json({author: 'Madhu'})});
router.post('/', function(req, res, next){});
router.put('/', function(req, res, next){});
router.delete('/', function(req, res, next){});

module.exports = router;