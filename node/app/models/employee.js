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
  Birthday : {type : Date}
});

var Employee = mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;

// var emplo_data = {
//   UniqueId: uuid.v4(),
//   Vorname: "Len",
//   Nachname : "Test",
//   CanRead : true,
//   GroupTitle : "Beschichtung",
//   GroupId : "Beschichtung",
//   Place : "Standort-Lerchenau",
//   ImgPath : "path/to/image.jpg",  
//   Birthday : new Date()
// }

// Employee.create(emplo_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('yaaaayyyy emplo')
// 	}
// })