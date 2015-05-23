var Entries = require('../models/entries')

function test (req, res, next){
      console.log('entries test')
      res.status(200).end();
}

module.exports = {
      test : test
}