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

// Icons.create(entry_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('jaaaa')
// 	}
// })