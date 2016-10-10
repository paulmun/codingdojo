var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = (function(){
	return{
		index: function(req, res){
			var people = Person.find({}, function(err, people){
				res.json(people);
			});
		},
		create: function(req, res){
			var person = new Person({name: req.params.name});
			person.save(function(err){
				if(err){
					console.log(err);
				}
				res.json(person);
			});
		},
		destroy: function(req,res){
			Person.remove({name:req.params.name}, function(err){
				if(err){
					console.log(err);
				}
				res.redirect('/');
			});
		},
		show: function(req, res){
			var person = Person.find({name:req.params.name}, function(err, person){
				if(person.length < 1){
					res.redirect('/');
				}
				else{
					res.json(person);
				}
			});
		}
	}
})();