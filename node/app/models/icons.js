var mongoose = require('mongoose'),
	uuid = require('uuid')

var IconsSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  TaskName : {type : String, required : true},
  ImgPath: { type: String, required: true},
  groups : {type : Array}
});



var Icons = mongoose.model('Icons', IconsSchema);
module.exports = Icons;

var tasks = ["Beschichten","Lager/ Logistik","Verpacken","Mettalverarbeitung","Wäscherei","Digitalisierung","Montage"]
var groups = [
{
  "UniqueId" : "Standort-Scharnitzstr",
  "Groups" : [
    {
      "Title" : "Berufsbildungsbereich",
      "UniqueId" : "Gruppe-Scharnitzstr-Berufsbildungsbereich"
    },
    {
      "Title" : "Lager/ Logistik",
      "UniqueId" : "Gruppe-Scharnitzstr-Lager-Logistik"
    },
    {
      "Title" : "Montage I",
      "UniqueId" : "Gruppe-Scharnitzstr-MontageI"
    },
    {
      "Title" : "Montage II",
      "UniqueId" : "Gruppe-Scharnitzstr-MontageII"
    },
    {
      "Title" : "Montage III",
      "UniqueId" : "Gruppe-Scharnitzstr-MontageIII"
    },
    {
      "Title" : "Montage IV",
      "UniqueId" : "Gruppe-Scharnitzstr-MontageIV"
    },
    {
      "Title" : "Montage V",
      "UniqueId" : "Gruppe-Scharnitzstr-MontageV"
    },
    {
      "Title" : "Verpackung",
      "UniqueId" : "Gruppe-Scharnitzstr-Verpackung"
    },
    {
      "Title" : "Kantine",
      "UniqueId" : "Gruppe-Scharnitzstr-Kantine"
    },
    {
      "Title" : "Metall",
      "UniqueId" : "Gruppe-Scharnitzstr-Metall"
    },
    {
      "Title" : "Förder- und Betreuungsbereich I",
      "UniqueId" : "Gruppe-Scharnitzstr-Förder-BetreuungsbereichI"
    },
    {
      "Title" : "Förder- und Betreuungsbereich II",
      "UniqueId" : "Gruppe-Scharnitzstr-Förder-BetreuungsbereichII"
    },
    {
      "Title" : "Förder- und Betreuungsbereich III",
      "UniqueId" : "Gruppe-Scharnitzstr-Förder-BetreuungsbereichIII"
    },
    {
      "Title" : "Externe Außenarbeitsplätze",
      "UniqueId" : "Gruppe-Scharnitzstr-ExterneAußenarbeitsplätze"
    },
    {
      "Title" : "Außenarbeitsgruppe Tierpark Hellabrunn",
      "UniqueId" : "Gruppe-Scharnitzstr-AußenarbeitsgruppeTierparkHellabrunn"
    }
  ]
},
{
  "UniqueId" : "Standort-Cafe-Plinganser",
  "Groups" : [ ]
},
{
  "UniqueId" : "Standort-Putzbrunn",
  "Groups" : [
    {
      "Title" : "Berufsbildungsbereich",
      "UniqueId" : "Berufsbildungsbereich"
    },
    {
      "Title" : "Metall",
      "UniqueId" : "Metall"
    },
    {
      "Title" : "Montage",
      "UniqueId" : "Montage"
    },
    {
      "Title" : "Verpackung",
      "UniqueId" : "Verpackung"
    },
    {
      "Title" : "Küche",
      "UniqueId" : "Küche"
    },
    {
      "Title" : "Wäscherei",
      "UniqueId" : "Wäscherei"
    }
  ]
},
{
  "UniqueId" : "Standort-Obersendling",
  "Groups" : [
    {
      "Title" : "Berufsbildungsbereich",
      "UniqueId" : "Berufsbildungsbereich"
    },
    {
      "Title" : "Technische Aufbereitung",
      "UniqueId" : "Technische Aufbereitung"
    },
    {
      "Title" : "Verpackung/Montage",
      "UniqueId" : "Verpackung-Montage"
    },
    {
      "Title" : "Digitalisierung",
      "UniqueId" : "Digitalisierung"
    }
  ]
},
{
  
  "UniqueId" : "Standort-Lerchenau",
  "Groups" : [
    {
      "Title" : "Berufsbildungsbereich",
      "UniqueId" : "Berufsbildungsbereich"
    },
    {
      "Title" : "Beschichtung",
      "UniqueId" : "Beschichtung"
    },
    {
      "Title" : "Montage",
      "UniqueId" : "Montage"
    },
    {
      "Title" : "Kantine",
      "UniqueId" : "Kantine"
    }
  ]
}
]

// for (var i = 0; i < tasks.length; i++) {
// 	var object = {
// 		"TaskName" : tasks[i],
// 		"ImgPath" : "path/to/img",
// 		"id" : uuid.v4(),
// 		"groups" : []
// 	}

// 	for (var k = 0; k < groups.length; k++) {
// 		var standort = groups[k].UniqueId;

// 		for (var j = 0; j < groups[k].Groups.length; j++) {
// 			object.groups.push({
// 				"group": groups[k].Groups[j].UniqueId,
// 				"place" : standort
// 			})
// 		};
// 	};

// 	Icons.create(object,function(err,done){
//  if(err){
//    console.log(err)
//  }else{
//    console.log('jaaaa')
//  }
// })



// };


// var entry_data = {
//   id: uuid.v4(),
//   TaskName: "Beschichten",
//   ImgPath: "path/to/img",
//   groups : [
// 		{
// 			place: "Standort-Lerchenau",
// 			group : "Beschichtung"
// 		},
// 		{
// 			place: "Standort-Lerchenau",
// 			group : "Montage"	
// 		}
//   ]
// }

