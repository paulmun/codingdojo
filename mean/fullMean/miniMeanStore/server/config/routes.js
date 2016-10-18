var userController = require('../controllers/users.js');

module.exports = function(app){

	app.get('/users', function(req, res){
		userController.all(req, res);
	});
	app.post('/users', function(req, res){
		userController.create(req, res);
	});
	app.delete('/users/:id', function(req, res){
		userController.destroy(req,res);	
	});

}

