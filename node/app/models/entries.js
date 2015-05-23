var mongoose = require('mongoose')

var EntriesSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  employeesId: { type: String, required: true},
  content: { type: String},
  timestamp : { type: Date},
  operationids : { type: String}
});

var Entries = mongoose.model('Entriess', EntriesSchema);
module.exports = Entries;