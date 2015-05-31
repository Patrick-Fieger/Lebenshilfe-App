var Leader = require('../models/leader'),
	Employees = require('../models/employee')
	Operations = require('../models/operations')
	bcrypt = require('bcrypt')

function login(req, res, next){
	Leader.findOne({ email: req.body.email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        res.send("Benutzer nicht gefunden").status(404).end();
      }

      if (!bcrypt.compareSync(req.body.password,user.password)) {
        res.send("Passwort falsch").status(401).end();
      }
      res.status(200).end();
    });
}

function create(req,res,next){
	Employees.create(req.body,function(err){
		if(err){
		    console.log(err);
		}else{
		    res.status(200).end();
		}
	});
}

function update(req,res,next){
	Employees.update({email: req.body.email},req.body,{upsert:true},function(err){
		if(err){
		    console.log(err);
		}else{
		    res.status(200).end();
		}
	});
}

function operations(req,res,next){
	Employees.update({email: req.body.id},{$push: {allowedgroups:req.body.group}},{upsert:true},function(err){
		if(err){
		    console.log(err);
		}else{
		    res.status(200).end();
		}
	});
}

module.exports = {
	login : login,
	create : create,
	update : update,
	operations : operations
}