var Places = require('../models/places')

function places(req, res, next){
	var back = {
		"Groups":[
		  {
			"UniqueId": "Standorte",
			"Items": [

			]
		 }
		]
	}

	Places.find({},function(err,standorte){
		if(err){
			res.status(500).end();
		}else{
			for (var i = 0; i < standorte.length; i++) {
				var group = {
					UniqueId : standorte[i].UniqueId,
					Title : standorte[i].Title,
					ImgPath : standorte[i].ImgPath
				}
				back.Groups[0].Items.push(group)
			};
			res.send(back).status(200).end();
		}
	});
}

function groups(req, res, next){
	var id = req.query.id
	var back = {}

	Places.findOne({UniqueId : id},function(err,place){
		if(err){
			res.status(500).end();
		}else{
			back.UniqueId = place.UniqueId;
  			back.Title = place.Title;
  			back.Items = place.Groups
			res.send(back).status(200).end();	
		}
	});
}


module.exports = {
	places : places,
	groups : groups
}