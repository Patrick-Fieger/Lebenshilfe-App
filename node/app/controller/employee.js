var Employees = require('../models/employee')
	Entries = require('../models/entries'),
	uuid = require('uuid')

function employees (req, res, next){
	Employees.find({},function(err, user){
		if(!err){
			res.send(user).status(200).end();
		}
	});
}

function reportsById(req, res, next){
	Entries.find({employeesId : req.params.id},function(err,reports){
		if(!err){
			res.send(reports).status(200).end();
		}
	});
}

function reportsByIdAndDate(req, res, next){
	Entries.find({
		employeesId : req.params.id,
		timestamp : req.params.date
	},function(err,reports){
		if(!err){
			res.send(reports).status(200).end();
		}
	});
}

function report(req, res, next){
	var data = req.body;
	data.id = uuid.v4();
	data.timestamp = new Date();

	//Hier müssen wir uns noch unterhalten
	Employees.create(data,function(err){
		if(err){
		    console.log(err);
		}else{
		    res.status(200).end();
		}
	});
}

module.exports = {
	employees : employees,
	reportsById : reportsById,
	reportsByIdAndDate : reportsByIdAndDate,
	report : report
}