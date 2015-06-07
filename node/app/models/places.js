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
//   "UniqueId": "Standort-BER",
//   "Title": "Berlin",
//   "ImgPath": "path/to/image.jpg",
//   "Groups" :  [
//   		{
//         	"UniqueId": "Gruppe-BER-A",
//         	"Title": "Gruppe A"
//       	},
//       	{
//         	"UniqueId": "Gruppe-BER-B",
//         	"Title": "Gruppe B"
//       	},
//       	{
//         	"UniqueId": "Gruppe-BER-C",
//         	"Title": "Gruppe C"
//       	},
//       	{
//         	"UniqueId": "Gruppe-BER-D",
//         	"Title": "Gruppe D"
//       	}
//   	]
// }

// Places.create(places_data,function(err,done){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('yaaaayyyy')
// 	}
// })