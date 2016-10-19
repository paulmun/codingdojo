var mongoose = require('mongoose'),
	Order = mongoose.model('Order'),
	Product = mongoose.model('Product'),
	User = mongoose.model('User');

function orderController(){

	this.all = function(req, res){
		Order.find().populate({path:'user product'}).exec(function(err, orders){
			if(err)res.json(err);
			else{
				res.json(orders);
			}
		});
	}

	this.create = function(req, res){
		var order = new Order({
			user: req.body.user,
			product: req.body.product._id,
			quantity: req.body.quantity
		});
		order.save(function(err, order){
			if(err)res.json(err);
			else{
				Product.findById(req.body.product, function(err, product){
						if(err){
							res.json(err);
						}
						else{
							product.quantity = product.quantity-req.body.quantity;
							product.save(function(err, order){
								if(err)res.json(err);
								else{
									res.json(product);
								}
							})
						}
					}
				);
			}
		});
	}
}

module.exports = new orderController();