var mongoose = require('mongoose')

var LeaderSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  avatar: { type: String},
  employeesId : { type: Array}
});

var Leader = mongoose.model('Leaders', LeaderSchema);
module.exports = Leader;