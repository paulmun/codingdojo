var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		uniqueCaseInsensitive: true
	},
	created_at: {
		type: Date, 
		required: true, 
		default: new Date
	}
});

UserSchema.plugin(uniqueValidator);

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