var mongoose = require('mongoose'),
	User = mongoose.model('User');

function userController(){

	this.create = function(req, res){
		var user = new User({name: req.body.name});
		user.save(function(err, data){
			if(err && err.errors.name.kind == 'user defined'){
				User.findOne({name: req.body.name}, function(err, user){
						console.log(user);
						if(err)res.json(err);
						else{
						res.json(user);
						}
					}
				);
			}	
			else if(err){
				console.log(err);
				res.json(err);
			}
			else{
				res.json(data);
			}
		});
	}

	this.show = function(req, res){
		User.findOne({_id: req.params.id}, function(err, user){
			if(err)res.json(err);
			else{
				res.json(user);
			}
		})
	}

}

module.exports = new userController();