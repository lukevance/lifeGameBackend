'use strict';

var knex = require('../db/knex');

// Function to delete the game data from all tables
function endGameHandler (req, res, next) {
  var id = req.body.game_id;
  // Deleting from games_players table
  knex('games_players').where('game_id', id).del().then(function() {
    console.log('game deleted from games_players: ' + id);
  });
  // Deleting from the stories table
  knex('stories').where('game_id', id).del().then(function() {
    console.log('stories deleted from stories table: ' + id);
  });
  // Deleting from the games table
  knex('games').where('game_id', id).del().then(function() {
    console.log
  })
};

//TODO: make a route for updating player stats


module.exports = endGameHandler;
