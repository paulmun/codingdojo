var mongoose = require('mongoose'),
	User = mongoose.model('User');

function userController(){

	this.create = function(req, res){
		var user = new User({name: req.body.name});
		user.save(function(err, user){
			if(err)res.json(err);
			else{
				res.json(user);
			}
		});
	}

	this.show = function(req, res){
		User.find({_id: req.params.id}, function(err, user){
			if(err)res.json(err);
			else{
				res.json(user);
			}
		})
	}

}

module.exports = new userController();