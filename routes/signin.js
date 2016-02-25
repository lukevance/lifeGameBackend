'use strict';
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

function signinHandler(req, res, next) {
  knex('players')
    .select()
    .where('email', req.body.email)
    .then(function(userData) {
      bcrypt.compare(req.body.password, userData[0].password, function(err, doesMatch) {
        if (doesMatch) {
          var playerData = userData[0];
          playerData.password = '(hidden)';
          res.json(playerData);
        } else {
          res.send({
            message: 'Incorrect Password!'
          });
        }
      })
    })
    .catch(function(error) {
      console.log(error);
    })
}



module.exports = signinHandler;
