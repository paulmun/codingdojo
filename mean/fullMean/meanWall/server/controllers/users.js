var mongoose = require('mongoose'),
	User = mongoose.model('User');

function userController(){
	this.create = function(req, res){
		var user = new User({name: req.body.name});
		user.save(function(err){
			if(err){
				console.log(err);
				res.json(err);
			}
			else{
				res.json(user);
			}
		})
	}
}

module.exports = new userController();