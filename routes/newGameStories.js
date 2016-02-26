var knex = require('../db/knex');

function newGameStoryGuardianHandler (req, res, next) {
  console.log(req.body);
  knex('stories').insert({game_id: req.body.gameSession,
    title: req.body.webTitle,
    type: req.body.type,
    url: req.body.webUrl
  }).returning('*')
  .then(function(insertion) {
    res.send(insertion);
  });
}

module.exports=newGameStoryGuardianHandler;

// table.increments();
// table.integer('game_id');
// table.string('title');
// table.string('type');
// table.string('url');
// table.text('summary');
