var userController = require('../controllers/users.js'),
	topicController = require('../controllers/topics.js'),
	commentController = require('../controllers/comments.js'),
	postController = require('../controllers/posts.js');

module.exports = function(app){

	app.post('/users', function(req, res){
		userController.create(req, res);
	});
	app.get('/users/:id', function(req,res){
		userController.show(req,res);
	});
	app.get('/topics', function(req, res){
		topicController.all(req, res);
	});
	app.post('/topics', function(req, res){
		topicController.create(req, res);
	});
	app.get('/topics/:id', function(req, res){
		topicController.show(req, res);
	});
	app.get('/topic/:id', function(req, res){
		topicController.one(req, res);
	});
	app.post('/posts', function(req, res){
		postController.create(req, res);
	});
	app.put('/posts/:id', function(req, res){
		postController.vote(req, res);
	});
	app.post('/comments', function(req, res){
		commentController.create(req, res);
	});

}

