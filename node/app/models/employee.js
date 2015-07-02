var mongoose = require('mongoose'),
	uuid = require('uuid')

var EmployeeSchema = mongoose.Schema({
  UniqueId: { type: String, required: true, unique: true },
  Vorname: { type: String, required: true},
  Nachname : { type: String, required: true},
  CanRead : { type: Boolean},
  GroupTitle : { type: String},
  GroupId : { type: String},
  Place : {type : String},
  ImgPath : { type: String},
  Birthday : {type : String}
});

var Employee = mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;

var vorname = ["Emma","Mia","Hanna","Sophia","Emilia","Ben","Luis","Paul","Lukas","Jonas"];
var nachname = ["Müller","Schmidt","Schneider","Fischer","Weber","Meyer","Wagner","Becker","Schulz","Hoffmann"]

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


// for (var i = 0; i < groups.length; i++) {
//   for (var k = 0; k < groups[i].Groups.length; k++) {
//     for (var j = 0; j < vorname.length; j++) {
//       var vor_ = vorname[Math.floor(Math.random()*10)]
//       var nach_ = nachname[Math.floor(Math.random()*10)]


//       var emplo_data = {
//         UniqueId: uuid.v4(),
//         Vorname: vor_,
//         Nachname : nach_,
//         CanRead : Math.random() < 0.5 ? true : false,
//         GroupTitle : groups[i].Groups[k].Title,
//         GroupId : groups[i].Groups[k].UniqueId,
//         Place : groups[i].UniqueId,
//         ImgPath : "http://46.101.175.76:3000/img/" + Math.floor(Math.random()*8) + ".jpg",  
//         Birthday : Date.now()
//       }

//       Employee.create(emplo_data,function(err,done){
//         if(err){
//           console.log(err)
//         }else{
//           console.log('Nutzer erstellt');
//         }
//       })
//     };
//   };
// };


// // Employee.find({},function(err,emplo){
// //   console.log(emplo.length)
// // })



