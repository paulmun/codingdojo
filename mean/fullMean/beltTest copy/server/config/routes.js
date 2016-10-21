var userController = require('../controllers/users.js'),
	questionController = require('../controllers/questions.js'),
	answerController = require('../controllers/answers.js');

module.exports = function(app){

	app.post('/users', function(req, res){
		userController.create(req, res);
	});
	app.get('/users/:id', function(req,res){
		userController.show(req,res);
	});
	app.get('/questions', function(req, res){
		questionController.all(req, res);
	});
	app.post('/questions', function(req, res){
		questionController.create(req, res);
	});
	app.get('/questions/:id', function(req, res){
		questionController.show(req, res);
	});
	app.get('/onequestion/:id', function(req, res){
		questionController.one(req, res);
	});

	app.put('/questions:id')

}

