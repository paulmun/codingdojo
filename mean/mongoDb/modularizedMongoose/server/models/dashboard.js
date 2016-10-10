var mongoose = require('mongoose');

var ChickenSchema = new mongoose.Schema({
	name: String,
	age: Number,
	special: Boolean,
})

var Chicken = mongoose.model('Chicken', ChickenSchema);
