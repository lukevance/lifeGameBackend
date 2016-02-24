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
var endTurn = require('./endTurn');
var getCard = require('./drawCard');
var endGame = require('./endGame');

// Sign IN
router.get('/signin', signin);
// add player
router.post('/newPlayer', newPlayer);
// New game
router.post('/newGame', newGame);
// end turn
router.put('/endTurn', endTurn);
// draw card
router.get('/getCard', getCard);
// end game
router.delete('/endGame', endGame);


module.exports = router;