var mongoose = require('mongoose'),
	uuid = require('uuid')

var EntriesSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  employeesId: { type: String, required: true},
  content: { type: String},
  timestamp : { type: String},
  icon : {type : String},
  mood : {type : String}
});

var Entries = mongoose.model('Entriess', EntriesSchema);
module.exports = Entries;


// var entry_data = {
//   id: uuid.v4(),
//   employeesId: "0a91f96c-b217-4629-ad4a-c09e6173ca63",
//   content: "Depp123",
//   timestamp : Date.now(),
//   mood : "good",
//   icon : ""
// }

// Entries.create(entry_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('j1')
// 	}
// })