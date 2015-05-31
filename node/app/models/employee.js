var mongoose = require('mongoose'),
	uuid = require('uuid')

var EmployeeSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  avatar : { type: String},
  canwrite : { type: Boolean},
  group : { type: String},
  // Habe ich in den Screenshots endeckt
  birthday : {type : Date}
});

var Employee = mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;

// var emplo_data = {
//   id: uuid.v4(),
//   name: "Patrick Fieger",
//   avatar : '/uploads/img.jpg',
//   canwrite : true,
//   group : "A"
// }

// Employee.create(emplo_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('yaaaayyyy')
// 	}
// })