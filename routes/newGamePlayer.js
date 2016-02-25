var knex = require('../db/knex');

function newGamePlayerHandler (req, res, next) {
  console.log(req.body);
  knex('games_players').insert({game_id: req.body.id,
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
  .then(function(response, err) {
    res.json({message: response});
  })
  .catch(function(err){
    res.send(err);
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
