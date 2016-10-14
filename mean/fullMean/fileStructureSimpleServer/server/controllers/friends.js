var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function friendsController(){
	this.index = function(req, res){
		var friends = Friend.find({}, function(err,friends){
			res.json(friends);
		});
	};
	this.create = function(req, res){
		var friend = new Friend({firstName: req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday});
		friend.save(function(err){
			if(err){
				console.log(err);
			}
			res.json(friend);
		});
	};
	this.update = function(req, res){
		console.log(req.params.id)
		var data = req.body;
		Friend.findById(req.params.id, function(err, friend){
			console.log(req.params.id)
			friend.firstName = data.firstName;
			friend.lastName = data.lastName;
			friend.birthday = data.birthday;
			friend.save(function(err){
				if(err){
					console.log('error!')
					console.log(err);
				}
			});
		})

	};
	this.deleted = function(req, res){
		console.log(req.params.id)
		Friend.findByIdAndRemove(req.params.id, function(err){
			Friend.find({}, function(err, friends){
			if(err){
				console.log(err);
			}
			res.json(friends);
			});
		});
	};
	this.show = function(req, res){
		Friend.findById(req.params.id, function(err, friend){
			console.log(friend.birthday)
			if(err){
				console.log(err);
			}
			res.json(friend);
		});
	};
}

module.exports = new friendsController();