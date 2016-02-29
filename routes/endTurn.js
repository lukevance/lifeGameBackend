'use strict';

var knex = require('../db/knex');

//Function to update player info in games_players table
function endTurnHandler (req, res) {
  //Selecting player from the table by id and game_id
  knex('games_players').where({
    game_id: req.body.game_id,
    player_id: req.body.player_id
  }).update({
    money: req.body.money,
    position: req.body.position,
    occupation: req.body.occupation,
    college: req.body.college,
    marriage: req.body.marriage,
    happiness: req.body.happiness,
    kids: req.body.kids,
    chipotle: req.body.chipotle,
    salary: req.body.salary,
    addiction: req.body.addiction
  }).then(function() {
    console.log('new player values: ' + req.body.money + req.body.position + req.body.occupation + req.body.college + req.body.marriage + req.body.kids + req.body.kids + req.body.chipotle + req.body.salary + req.body.addiction);
    res.json({success: 'super true'});
  });
}



module.exports = endTurnHandler;
