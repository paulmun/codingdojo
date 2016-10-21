var mongoose = require('mongoose'),
	Topic = mongoose.model('Topic'),
	User = mongoose.model('User'),
	Post = mongoose.model('Post'),
	Comment = mongoose.model('Comment');

function CommentController(){

	this.create = function(req, res){
		var comment = new Comment({
			comment: req.body.comment, 
			user: req.body.user,
		});
		comment.save(function(err, comment){
			if(err)res.json(err);
			else{
				User.findById(comment.user, function(err, user){
					user.comments.push(comment._id);
					user.save(function(err){
						if(err)res.json(err);
						Post.findById(req.body.post, function(err, post){
							console.log(post);
							if(err)res.json(err);
							post.comments.push(comment._id);
							post.save(function(err, post){
								console.log(post);
								if(err)res.json(err);
								res.json(post);
							});
						});

					});
				});
				
			}
		});
	}
}
module.exports = new CommentController();