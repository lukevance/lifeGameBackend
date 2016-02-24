'use strict';

var express = require('express');
var router = express.Router();

// GET all players from all time - for scoreboard etc;
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// GET particular player and all info from them - for in game scenario
router.get('/:id', getOnePlayer);
function getOnePlayer (req, res, next) {
    res.json({data: 'player data returned here'});
}

// Add player to game - game setup scenario
router.post('/new', postNewPlayer);
function postNewPlayer (req, res, next) {
  res.json({data: 'player added successfully message'});
}

// Edit player info - in game scenario
router.put('/:id', putOnePlayer);
function putOnePlayer (req, res, next) {
  res.json({data: 'player stats edited succesffuly message'});
}

// Delete player from game - in game scenario, someone leaves?
router.delete('/:id', deleteOnePlayer);
function deleteOnePlayer (req, res, next) {
  res.json({data: 'player has been removed from game message'});
}


module.exports = router;
