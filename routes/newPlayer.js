'use strict';
var knex = require('../db/knex.js');

function newPlayerHandler (req, res, next) {
  var newPlayer = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    color: req.body.color,
    gender: req.body.gender
  };

//check to see if email already exists in DB
knex('players')
.select()
.where('email', newPlayer.email)
.then(function(data){
  res.send(data);
})
// if not, then insert with KNEX

}



module.exports = newPlayerHandler;
