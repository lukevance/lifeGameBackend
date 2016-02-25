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
var newGameStoriesOnionBuzzfeed = require('./newGameStoriesOnionBuzzfeed');


// Sign IN
router.post('/signin', signin);
// add player
router.post('/newPlayer', newPlayer);
// New game
router.post('/newGame', newGame);

// inserting stories into db from The Onion and Buzzfeed
router.post('/newGameStoriesOnionBuzzfeed', newGameStoriesOnionBuzzfeed);
router.post('/newGamePlayer', function(req, res, next){
  console.log('blah');next();
}, newGamePlayer);
router.post('/newGameStories', newGameStories);

// end turn
router.put('/endTurn', endTurn);
// draw card
router.post('/drawCard', drawCard);
// end game
router.delete('/endGame', endGame);


module.exports = router;
