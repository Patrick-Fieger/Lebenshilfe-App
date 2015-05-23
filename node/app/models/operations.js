var mongoose = require('mongoose')

var OperationsSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  active: { type: Boolean},
  picture : { type: String},
  description : { type: String}
});

var Operations = mongoose.model('Operationss', OperationsSchema);
module.exports = Operations;