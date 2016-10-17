var wallController = require('../controllers/walls.js'),
	userController = require('../controllers/users.js');

module.exports = function(app){
	app.post('/users', function(req, res){
		userController.create(req, res);
	});
	app.get('/messages', function(req, res){
		wallController.all(req,res);	
	});
	app.post('/messages', function(req, res){
		wallController.create(req, res);
	});
	app.put('/messages/:id', function(req, res){
		wallController.createComment(req,res);
	});

}

