'use strict';
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

function newPlayerHandler(req, res, next) {
  var newPlayer = {
    name: req.body.name,
    email: req.body.email
  };

  bcrypt.hash(req.body.password, 10, function(err, hash) {
    newPlayer.password = hash;
    addPlayer();
  });



  //check to see if email already exists in DB
  function addPlayer() {
    knex('players')
      .select()
      .where('email', newPlayer.email)
      .limit(1)
      .then(function(data) {
        if (data.length === 0) {
          return knex('players')
            .insert(newPlayer);
        } else {
          res.send({
            message: 'Email account already in use!!'
          });
        }
      })
      .then(function(insertStatus) {
        res.json(insertStatus);
      })
      .catch(function(error) {
        console.log(error);
      });
      // if not, then insert with KNEX
  }
}



module.exports = newPlayerHandler;
