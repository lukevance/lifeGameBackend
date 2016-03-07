'use strict';

var knex = require('../db/knex');

//Function to draw random card from stories table
function drawCardHandler (req, res, next) {
  var card = {};
  //Required variables on req.body: type, game_id
  card.type = req.body.type;
  card.game_id = req.body.game_id;
  //Selecting all possible stories based on id and type
  var possibleStories = knex('stories').where({
    type: card.type,
    game_id: card.game_id
  }).select().then(function() {
    console.log('successfully selected stories');
    //Choosing a random story from the (hopefully) array
    var randoStory = possibleStories[Math.floor(possibleStories.length*Math.random())];
    res.json(randoStory);
  });

}

module.exports = drawCardHandler;
