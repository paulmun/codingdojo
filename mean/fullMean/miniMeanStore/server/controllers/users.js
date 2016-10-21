var mongoose = require('mongoose'),
	User = mongoose.model('User');

function userController(){

	this.all = function(req, res){
		User.find({}, function(err, users){
			if(err)res.json(err);
			else{
				res.json(users);
			}
		})
	}

	this.create = function(req, res){
		var user = new User({name: req.body.name});
		user.save(function(err, user){
			if(err)res.json(err);
			else{
				res.json(user);
			}
		});
	}

	this.destroy = function(req, res){
		console.log(req.params.id)
		User.findByIdAndRemove(req.params.id, function(err){
			if(err)res.end(err);
		});
	}

}

module.exports = new userController();