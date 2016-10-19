var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	uniqueValidator = require('mongoose-unique-validator');


var ProductSchema = new Schema({
	name: {
		type: String,
		minlength: [2, 'Your product name must be at least two letters long'],
		required: [true, 'Please enter a name'],
		unique: true,
		uniqueCaseInsensitive: true,
		trim: true
	},
	image: String,
	quantity: {
		type: Number,
		required: [true, 'Please enter a quantity']
	},
	description: String,
	created_at: {
		type: Date, 
		required: true, 
		default: new Date
	}
});

ProductSchema.plugin(uniqueValidator, {message: "There's already a product with this name!"});

var Product = mongoose.model('Product', ProductSchema);