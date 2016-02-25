'use strict';

var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_HOST
});

var signin = require('./signin');
var newPlayer = require('./newPlayer');
var newGame = require('./newGame');
var newGamePlayer = require('./newGamePlayer');
var newGameStories = require('./newGameStories');
var endTurn = require('./endTurn');
var drawCard = require('./drawCard');
var endGame = require('./endGame');

// Sign IN
router.get('/signin', signin);
// add player
router.post('/newPlayer', newPlayer);
// New game
router.post('/newGame', newGame);
router.post('/newGamePlayer', newGamePlayer);
router.post('/newGameStories', newGameStories);
// end turn
router.put('/endTurn', endTurn);
// draw card
router.post('/drawCard', drawCard);
// end game
router.delete('/endGame', endGame);


module.exports = router;
