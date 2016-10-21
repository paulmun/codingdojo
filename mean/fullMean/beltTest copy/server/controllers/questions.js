var mongoose = require('mongoose'),
	Question = mongoose.model('Question'),
	Answer = mongoose.model('Answer');

function questionController(){

	this.one = function(req, res){
		var question = Question.findById(req.params.id, function(err, question){
			if(err){
				res.json(err);
			}
			res.json(question);
		})
	}

	this.all = function(req, res){
		var questions = Question.find({}, function(err, questions){
			if(err){
				res.json(err);
			}
			res.json(questions)
		});
	}

	this.create = function(req, res){
		console.log(req.body);
		var question = new Question({
			question: req.body.question, 
			description: req.body.description
		});
		question.save(function(err, question){
			if(err)res.json(err);
			else{
				res.json(question);
			}
		});
	}

	this.show = function(req, res){
		Question.find({_id: req.params.id}, function(err, user){
			if(err)res.json(err);
			else{
				res.json(user);
			}
		})
	}

}

module.exports = new questionController();