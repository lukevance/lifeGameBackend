'use strict';

var knex = require('../db/knex');

// Function to delete the game data from all tables
function endGameHandler (req, res, next) {
  var id = req.body.game_id;
  // Deleting from games_players table
  console.log(req.body.game_id);
  knex('games_players').where('game_id', id).del().then(function() {
    return knex('stories').where('game_id', id).del();
  }).then(function() {
    return knex('games').where('id', id).del();
  }).then(function() {
    res.json({success: true})
  })
  };

//TODO: make a route for updating player stats


module.exports = endGameHandler;
