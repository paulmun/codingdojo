var mongoose = require('mongoose');
var Chicken = mongoose.model('Chicken');

module.exports = (function(){})

	all: function(req, res){
		Chicken.find({}, function(err, chicks){
			var chickens = chicks;
			res.render('index', {chickens:chickens});
		});
	},

	show: function(req,res){
		Chicken.findById(req.params.id, function(err, chick){
			var chicken = chick;
			res.render('chicken', {chicken:chicken});
		});
	},

	create: function(req,res){
		var data = ('POST DATA', req.body);
		console.log(data);
		var chicken = new Chicken();
		chicken.name = data.name;
		chicken.age = data.age;
		chicken.special = data.special;
		chicken.save(function(err){
			res.redirect('/');
		});
	},

	loadEdit: function(req,res){
		Chicken.findById(req.params.id, function(err,chicken){
			res.render('edit', {chicken:chicken});	
		});
	},

	postEdit: function(req, res){
		var data = ('POST DATA', req.body);
		Chicken.findById(req.params.id, function(err, chicken){
			console.log(chicken);
			chicken.name = data.name;
			chicken.age = data.age;
			chicken.special = data.special;
			chicken.save(function(err){
				if(err){
					console.log(err);
				}
				res.redirect('/');
			});
		});
	},

	destroy: function(req, res){
		Chicken.remove({_id:req.params.id}, function(err){
				if(err){
				console.log(err);
			}
			res.redirect('/');
		});
	},
}