var employee = require('./controller/employee')
	, entries = require('./controller/entries')
	, leader = require('./controller/leader')
	, operations = require('./controller/operations')

module.exports = function(app){
	app.post('/employee', employee.test)
	app.post('/entries', entries.test)
	app.post('/leader', leader.test)
	app.post('/operations', operations.test)
}