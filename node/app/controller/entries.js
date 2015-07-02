var Icons = require('../models/icons')

function icons(req, res, next){
	var id = req.query.id
	var place = req.query.place
	var back = {
		"Groups":[{}]
	}
	back.Groups[0].UniqueId = id;
	var ico = []

	Icons.find({},function(err,icons){
		for (var i = 0; i < icons.length; i++) {
			for (var x = 0; x < icons[i].groups.length; x++) {
				if (icons[i].groups[x].place == place &&
					icons[i].groups[x].group == id
					) {
					ico.push({UniqueId : icons[i].id, ImgPath : icons[i].ImgPath, isSelected: true})
				};
			};
		};
		back.Groups[0].Items = ico;
		
		res.send(back).status(200).end();
	});
}

module.exports = {
      icons : icons
}