'use strict';

function endTurnHandler (req, res, next) {
  res.send('you made it!!!');

}



module.exports = endTurnHandler;
