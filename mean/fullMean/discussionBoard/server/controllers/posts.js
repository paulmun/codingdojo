var mongoose = require('mongoose'),
	Topic = mongoose.model('Topic'),
	User = mongoose.model('User'),
	Post = mongoose.model('Post'),
	Comment = mongoose.model('Comment');

function PostController(){

	this.create = function(req, res){
		console.log(req.body);
		var post = new Post({
			post: req.body.post, 
			user: req.body.user,
		});
		post.save(function(err, post){
			if(err)res.json(err);
			else{
				User.findById(post.user, function(err, user){
					console.log(user);
					user.posts.push(post._id);
					user.save(function(err){
						console.log(user);
						if(err)res.json(err);
						Topic.findById(req.body.topic, function(err, topic){
							console.log(topic);
							if(err)res.json(err);
							topic.posts.push(post._id);
							console.log(topic);
							topic.save(function(err){
								if(err)res.json(err);
								res.json(topic);
							});
						});

					});
				});
				
			}
		});
	}
	this.vote = function(req, res){
		Post.findById(req.params.id, function(err, post){
			if(err)res.json(err);
			if(req.body.bool){
				console.log('up')
				post.upVote.push(req.body.user);
				post.save(function(err){
					res.end;
				});
			}
			else{
				console.log('down')
				post.downVote.push(req.body.user);
				post.save(function(err){
					res.end;
				});
			}
		})
	}
}
module.exports = new PostController();