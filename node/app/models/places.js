var mongoose = require('mongoose')

var PlacesSchema = mongoose.Schema({
  "UniqueId": { type: String},
  "Title": { type: String},
  "ImgPath": { type: String},
  "Groups" : { type : Object }
});

var Places = mongoose.model('Places', PlacesSchema);
module.exports = Places;


// var places_data = {
//   "UniqueId": "Standort-Lerchenau",
//   "Title": "Standort Lerchenau",
//   "ImgPath": "path/to/image.jpg",
//   "Groups" :  [
//   		{
//   			UniqueId : "Berufsbildungsbereich",
//   			Title : "Berufsbildungsbereich"
//   		},
// 		{
// 			UniqueId : "Beschichtung",
// 			Title : "Beschichtung"
// 		},
// 		{
// 			UniqueId : "Montage",
// 			Title : "Montage"
// 		},
// 		{
// 			UniqueId : "Kantine",
// 			Title : "Kantine"
// 		}
//   	]
// }



// Places.create(places_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('yaaaayyyy')
// 	}
// })