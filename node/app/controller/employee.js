var Employees = require('../models/employee')

function test (req, res, next){
	console.log('employee test');
      res.status(200).end();
}

module.exports = {
	test : test
}