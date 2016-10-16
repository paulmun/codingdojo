var loginController = require('../controllers/logins.js');

module.exports = function(app){
	app.post('/users', function(req, res){
		console.log('Back-end Routes');
		loginController.create(req, res);
		console.log(res.errors);
	});
	app.post('/users/:email', function(req,res){
		loginController.login(req,res);
	})
	app.get('/users:id', function(req, res){
		loginController.show(req,res);
	})
}

