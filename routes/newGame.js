// 'use strict';
var knex = require('../db/knex');

function newGameHandler (req, res, next) {
  knex('games').insert({stories: 'someStory'}).returning('id')
  .then(function(response) {
    res.json(response);
  });

}


module.exports = newGameHandler;


// function(req, res, next) {
//   var newGame = {};
//   knex.insert(newGame).table('games');
//   var newStory = {
//     title: req.body.title,
//     url: req.body.url,
//     game_id: req.body.game_id,
//     type: req.body.type
//     //Remember to add comment above when including sentiment column
//     // sentiment: req.body.sentiment
//   };
//   return knex.insert(newStory).into('stories').then(function(res) {
//     console.log('super success!');
//   }, function(res) {
//     console.log('error: ' + res);
//   });
// });
