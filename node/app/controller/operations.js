var Operations = require('../models/operations')

function test (req, res, next){
      console.log('operations test')
      res.status(200).end();
}

module.exports = {
      test : test
}