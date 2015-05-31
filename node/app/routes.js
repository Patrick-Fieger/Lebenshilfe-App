var employee = require('./controller/employee')
	, entries = require('./controller/entries')
	, leader = require('./controller/leader')
	, operations = require('./controller/operations')

module.exports = function(app){
	app.get('/employees', employee.employees)
	app.get('/reports/:id', employee.reportsById)
	app.get('/reports/:id/:date', employee.reportsByIdAndDate)
	app.post('/report', employee.report)

	app.post('/login', leader.login)
	app.post('/create/employee', leader.create)
	app.post('/update/employee', leader.update)
	app.post('/operations', leader.operations)
}