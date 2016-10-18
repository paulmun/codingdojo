var mongoose = require('mongoose'),
	Product = mongoose.model('Product');

function productController(){

	this.all = function(req, res){
		Product.find({}, function(err, products){
			if(err)res.json(err);
			else{
				res.json(products);
			}
		})
	}

	this.create = function(req, res){
		var product = new Product({
			name: req.body.name,
			image: req.body.image,
			quantity: req.body.quantity,
			description: req.body.description
		});
		product.save(function(err, product){
			if(err)res.json(err);
			else{
				res.json(product);
			}
		});
	}

	this.destroy = function(req, res){
		Product.findByIdAndRemove(req.params.id, function(err){
				if(err)res.json(err);
				else{
					res.json(true);
				}
		});
	}

}

module.exports = new productController();