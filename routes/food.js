var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * FROM food').then(function(payload) {
    res.render('food/index', {
      food: payload.rows
    });
  });
});

module.exports = router;
