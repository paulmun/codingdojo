var mongoose = require('mongoose'),
	Answer = mongoose.model('Answer'),
	User = mongoose.model('User'),
	Question = mongoose.model('Question');

function answerController(){

	this.create = function(req, res){
		var answer = new Answer({
			user: req.body.user, 
			answer: req.body.answer, 
			details: req.body.details, 
		});
		answer.save(function(err, user){
			if(err)res.json(err);
			else{
				Question.findById(req.body.question, function(err, question){
					if(err){
						return err;
					}
					question.answers.push(answer._id);
					res.json(question);
				});
			}
		});
	}
	this.like = function(req, res){
		var answer = Answer.find({_id: req.params.id}, function(err, answer){
			if(err){
				res.json(err);
			}
			else{
				answer.likes.push(req.body.user);
				answer.save(function(err){
					if(err){
						res.json(err);
					}
					else{
						return true;
					}
				})	
			}
		});
		
	}

}

module.exports = new answerController();