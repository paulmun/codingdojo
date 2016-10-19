var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var OrderSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product'
	},
	quantity: {
		type: Number,
		required: [true, 'Please enter a quantity']
	},
	created_at: {
		type: Date, 
		required: true, 
		default: new Date
	}
});

var Order = mongoose.model('Order', OrderSchema);