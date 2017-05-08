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

router.get('/new', function(req, res, next) {
  res.render('food/new');
});

router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM food WHERE id = ${req.params.id}`).then(function(payload) {
    res.render('food/show', {
      food: payload.rows[0]
    });
  });
});

router.post('/', function(req, res, next) {
  knex.raw(`INSERT into food (name) VALUES('${req.body.name}')`).then(function() {
    res.redirect('/food');
  });
});

router.get('/:id/edit', function(req, res, next) {
  knex.raw(`SELECT * FROM food WHERE id = ${req.params.id}`).then(function(payload) {
    res.render('food/edit', {
      food: payload.rows[0]
    });
  });
});

router.post('/:id', function(req, res, next) {
  knex.raw(`UPDATE food SET
    name = '${req.body.name}',
    quantity = ${req.body.quantity}
    WHERE id = ${req.body.id}
    `).then(function(payload) {
      res.redirect('/food');
    });
});

module.exports = router;
