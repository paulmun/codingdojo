var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	birthday: Date,
	created_on: {type: Date, required: true, default: new Date}
})

var Friend = mongoose.model('Friend', FriendSchema);