var mongoose = require('mongoose'),
	bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10


var LeaderSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true},
  avatar: { type: String},
  employeesId : { type: String},
  // Wir brauchen für den login einen eindeutigen Username oder email
  username : {type : String},
  password : {type : String}
});

LeaderSchema.pre('create', function(next){
	var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});
var Leader = mongoose.model('Leaders', LeaderSchema);
module.exports = Leader;