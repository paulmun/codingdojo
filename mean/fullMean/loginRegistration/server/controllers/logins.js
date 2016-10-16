var mongoose = require('mongoose');
var Login = mongoose.model('Login');

function loginController(){
	this.create = function(req, res){
		console.log('Back-end Controller');
		console.log(req.body.password);
		if(req.body.password === req.body.confirmPassword){
			var user = new Login({
				email: req.body.email, 
				name: {firstName: req.body.firstName,
					lastName: req.body.lastName
				},
				password: req.body.password,
				birthday: req.body.birthday});
			user.save(function(err){
				if(err){
					console.log(err.errors.errors);
					res.json(err);
				}
				console.log(user);
				res.json(user);
			})
		}
		else{
			res.json({error: "Your passwords do not match"})
		}
	}

	this.login = function(req, res){
		console.log('back-end Controller');
		var data = Login.findOne({email: req.body.email}, function(err, user){
			if(err){
				res.json(err);
			}
			console.log(user);
			data = user;
			console.log(user.email, user.password);
			console.log(req.body.email, req.body.password)
			if(!data){
			console.log('no data');
			res.json({error: 'The email or password you entered is incorrect'})
			}
			else if(data.password === req.body.password){
				res.json(data);
			}
			else{
				console.log('wrong password');
				res.json({error: 'The email or password you entered is incorrect'})
			}
		});
		
	}

	this.show = function(req, res){
		console.log('grabbing by cookie');
		Login.findById(req.params.id, function(err, user){
			if(err){
				console.log('uhoh');
				res.json(err);
			}
			console.log(user);
			res.json(user);
		})
	}
}

module.exports = new loginController();