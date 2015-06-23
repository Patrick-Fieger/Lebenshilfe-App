var Employees = require('../models/employee')
	Entries = require('../models/entries'),
	Places = require('../models/places')
	uuid = require('uuid')

function employees (req, res, next){
	var id = req.query.id
	var place = req.query.place
	var back = {
		"Groups":[{}]
	}

	Employees.find({"GroupId": id, "Place" : place},function(err, user){
		if(!err){
			back.Groups[0].UniqueId = id;
  			back.Groups[0].Title = user[0].GroupTitle;
  			back.Groups[0].Items = user;

			res.send(back).status(200).end();
		}
	});
}

function reportsById(req, res, next){
	var back = {
		"Groups":[{}]
	}

	Entries.find({employeesId : req.query.id},function(err,reports){
		if(!err){
			back.Groups[0].UniqueId = "",
			back.Groups[0].Title = "";
			back.Groups[0].Items = reports;

			res.send(back).status(200).end();
		}else{
			res.status(500).end();
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

function groupmembers(req, res, next){
	var id = req.query.id;
	var back = {
		"UniqueId" : id
	}
	Employees.find({GroupId : id}, function(err,member){
		if(err || member.length == 0){
			res.status(404).end();
		}else{
			back.Title = member[0].GroupTitle
			back.Items = member
			res.send(back).status(200).end();
		}
	});
}

function report(req, res, next){
	console.log(req.body)
	var data = req.body;
	data.id = uuid.v4();
	data.timestamp = Date.now();
	Entries.create(data,function(err){
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
	report : report,
	groupmembers : groupmembers
}