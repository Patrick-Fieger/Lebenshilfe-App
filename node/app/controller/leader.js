var Leader = require('../models/leader')

function test (req, res, next){
      console.log('leader test')
      res.status(200).end();
}

module.exports = {
      test : test
}