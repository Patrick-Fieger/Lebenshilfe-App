var Employees = require('../models/employee')
	Entries = require('../models/entries'),
	Places = require('../models/places'),
	Icons = require('../models/icons')
	uuid = require('uuid'),
	moment = require('moment');

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

function timeConverter(UNIX_timestamp){
  var date = new Date(parseInt(UNIX_timestamp))
  var formatted = moment(date).format('DD.MM.YYYY')
  return formatted;
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

			Icons.find({},function(err,icon__){

				for (var i = 0; i < back.Groups[0].Items.length; i++) {
					back.Groups[0].Items[i].timestamp = timeConverter(back.Groups[0].Items[i].timestamp)
					var test = back.Groups[0].Items[i].icon
						if(test !== ""){
							var arr_ = test.replace(/\s/g, '').split(',');
							var string = "";
						
							for (var j = 0; j < arr_.length; j++) {
								if(arr_[j].charAt(0) == " "){
									arr_[j].substring(1);
								}else if(arr_[j] == " "){
									arr_[j].pop();
								}


								for (var x = 0; x < icon__.length; x++) {
									if(arr_[j] == icon__[x].id){
										string = string + icon__[x].TaskName + ', ';
										back.Groups[0].Items[i].icon = string.substring(0, string.length - 2);
									}
								};

							};
						}
				};

				res.send(back).status(200).end();
			});			
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