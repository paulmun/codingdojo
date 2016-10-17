var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	created_at: {
		type: Date, 
		required: true, 
		default: new Date
	}
});

var CommentSchema = new Schema({
		name: String,
		content: String,
		created_at: {
			type: Date,
			required: true,
			default: new Date
		}
});

var WallSchema = new Schema({
	name: String,
	content: String,
	comments: [CommentSchema],
	created_at: {
		type: Date,
		required: true,
		default: new Date
	}
});



var Wall = mongoose.model('Wall', WallSchema),
	User = mongoose.model('User', UserSchema),
	Comment = mongoose.model('Comment', CommentSchema);