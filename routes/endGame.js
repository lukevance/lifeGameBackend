'use strict';

function endGameHandler (req, res, next) {
  // res.send('you made it!!!');
  knex('games_players').where('game_id', req.body.game_id).del();
  knex('stories').where('game_id', req.body.game_id).del();
  knex('games').where('game_id', req.body.game_id).del();
}



module.exports = endGameHandler;
