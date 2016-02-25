'use strict';

function newPlayerHandler (req, res, next) {
  var newPlayer = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    color: req.body.color
  };

//check to see if email already exists in DB
// if not, then insert with KNEX

}



module.exports = newPlayerHandler;
