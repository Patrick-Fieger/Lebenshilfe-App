var mongoose = require('mongoose'),
	uuid = require('uuid')

var EntriesSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  employeesId: { type: String, required: true},
  content: { type: String},
  timestamp : { type: Date},
  mood : {type : String},
  operationids : { type: String}
});

var Entries = mongoose.model('Entriess', EntriesSchema);
module.exports = Entries;

// var entry_data = {
//   id: uuid.v4(),
//   employeesId: "a9f7a0bb-011f-45ac-81ac-045e6f965194",
//   content: "Das ist ein Text 222222",
//   timestamp : new Date(),
//   mood : "good",
//   operationids : 1
// }

// Entries.create(entry_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('yaaaayyyy')
// 	}
// })