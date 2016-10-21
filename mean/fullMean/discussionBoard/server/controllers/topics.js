var mongoose = require('mongoose'),
	Topic = mongoose.model('Topic'),
	User = mongoose.model('User'),
	Post = mongoose.model('Post'),
	Comment = mongoose.model('Comment');

function TopicController(){

	this.one = function(req, res){
		Topic.findById(req.params.id)
		.populate({
			path:'posts',
			model: 'Post',
			populate: {
				path: 'comments',
				model: 'Comment',
				populate: {
					path: 'user',
					model: 'User'
				}
			}
		})
		.populate({
			path:'posts',
			populate: {
				path: 'user upVote downVote',
				model: 'User'
			}
		})
		.populate('user')

		.exec(function(err, topic){
			if(err)res.json(err);
			console.log(topic.posts[0]);
			res.json(topic);	
		});
	}

	this.all = function(req, res){
		var topics = Topic.find().populate('user').exec(function(err, topics){
			if(err){
				res.json(err);
			}
			res.json(topics)
		});
	}

	this.create = function(req, res){
		console.log(req.body);
		var topic = new Topic({
			title: req.body.title, 
			description: req.body.description,
			user: req.body.user,
			category: req.body.category
		});
		topic.save(function(err, topic){
			if(err)res.json(err);
			else{
				User.findById(topic.user, function(err, user){
					user.topics.push(topic._id);
					user.save(function(err){
						if(err)res.json(err);
						res.json(true);
					});
				});
				
			}
		});
	}

	this.show = function(req, res){
		Topic.find({_id: req.params.id}, function(err, topic){
			if(err)res.json(err);
			else{
				res.json(topic);
			}
		})
	}

}

module.exports = new TopicController();