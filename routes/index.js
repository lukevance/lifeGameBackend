'use strict';

var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_HOST
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Life is Short, and Then You Die' });
});

router.post('create', function(req, res, next) {
  var newGame = {};
  knex.insert(newGame).table('games')
});

router.post('/insert', function(req, res, next) {
  var newGame = {};
  knex.insert(newGame).table('games');
  var newStory = {
    title: req.body.title,
    url: req.body.url,
    game_id: req.body.game_id,
    type: req.body.type
    //Remember to add comment above when including sentiment column
    // sentiment: req.body.sentiment
  };
  return knex.insert(newStory).into('stories').then(function(res) {
    console.log('super success!');
  }, function(res) {
    console.log('error: ' + res);
  });
});

router.get('/getstories', function(req, res, next) {
  console.log(req);
  // knex('stories').where({
  //   game_id: req.body.game_id
  // }).select('*').then(function(res) {
  //   res.send(res)
  // })
});




module.exports = router;
