var knex = require('../db/knex');

function newGamePlayerHandler (req, res, next) {
  knex('games_players').insert({game_id: req.body.gameSession,
    player_id: req.body.playerID,
    money: 0,
    position: 0,
    occupation: 'none',
    college: false,
    marriage: false,
    kids: 0,
    chipotle: false,
    salary: 0,
    addiction: 'none'}).returning('*')
  .then(function(response) {
    res.json('success', response);
  });
}


module.exports = newGamePlayerHandler;

// table.increments();
// table.integer('game_id');
// table.integer('player_id');
// table.integer('money');
// table.integer('position');
// table.string('occupation');
// table.boolean('college');
// table.boolean('marriage');
// table.integer('kids');
// table.boolean('chipotle');
// table.integer('salary');
// table.string('addiction');
