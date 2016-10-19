var userController = require('../controllers/users.js'),
	productController = require('../controllers/products.js'),
	orderController = require('../controllers/orders.js');


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
	app.get('/products', function(req, res){
		productController.all(req, res);
	});
	app.post('/products', function(req, res){
		productController.create(req, res);
	});
	app.delete('/products/:id', function(req, res){
		productController.destroy(req,res);	
	});
	app.get('/orders', function(req, res){
		orderController.all(req, res);
	});
	app.post('/orders', function(req, res){
		orderController.create(req, res);
	})

}

