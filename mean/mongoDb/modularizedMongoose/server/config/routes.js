var dashboard = require('../controllers/dashboard.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		dashboard.all(req,res);
	});

	app.get('/chicken/new', function(req, res){
		res.render('newChicken');
	});

	app.get('/chicken/:id', function(req, res){
		dashboard.show(req,res);
	});

	app.post('/chickens', function(req, res){
		dashboard.create(req,res);
	});

	app.get('/chicken/:id/edit', function(req, res) {
		dashboard.loadEdit(req, res);
	});

	app.post('/chickens/:id', function(req, res) {
		dashboard.postEdit(req, res);
	});

	app.post('/chickens/:id/destroy', function(req, res) {
		dashboard.destroy(req, res);
	});
};