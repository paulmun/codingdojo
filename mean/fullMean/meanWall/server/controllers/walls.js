var mongoose = require('mongoose'),
	Wall = mongoose.model('Wall'),
	Comment = mongoose.model('Comment');

function wallController(){
	this.create = function(req, res){
		message = new Wall({
			name: req.body.name,
			content: req.body.content
		});
		message.save(function(err){
			console.log(message);
		})

	}
	this.createComment = function(req, res){
		message = Wall.findById(req.params.id, function(err, mess){
			if(err){
				console.log(err);
			}
			message = mess;
			message.comments.push(new Comment({
				name: req.body.name,
				content: req.body.content
			}));
			message.save(function(err){
				if(err){
					console.log(err);
				}
				else{
					res.json(message);
				}
			})
		});
	}
	this.all = function(req,res){
		Wall.find({}, function(err, messages){
			if(err){
				res.json(err);
			}
			else{
				res.json(messages);
			}
		});
	}
}

module.exports = new wallController();