var knex = require('../db/knex');


function newGameStoriesOnionBuzzfeed(req, res, next) {
  knex('stories').insert({
    game_id: req.body.gameSession,
    type: req.body.type,
    title: req.body.article.title,
    url: req.body.article.link,
    summary: req.body.article.content
  }).returning('*')
  .then(function(info){
    res.send(info);
  });
}




module.exports = newGameStoriesOnionBuzzfeed;
