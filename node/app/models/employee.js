var mongoose = require('mongoose')

var EmployeeSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  avatar : { type: String},
  canwrite : { type: Boolean}
});

var Employee = mongoose.model('Employees', EmployeeSchema);
module.exports = Employee;