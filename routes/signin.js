'use strict';

function signinHandler (req, res, next) {
  console.log('blah');
  res.send('you made it!!!');

}



module.exports = signinHandler;
