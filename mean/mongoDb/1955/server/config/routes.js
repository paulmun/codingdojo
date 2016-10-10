var mainController = require('../controllers/mainController.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		mainController.index(req,res);
	});
	app.get('/new/:name', function(req, res){
		mainController.create(req,res);
	});
	app.get('/remove/:name', function(req,res){
		mainController.destroy(req,res);
	});
	app.get('/:name', function(req,res){
		mainController.show(req,res);
	});
};