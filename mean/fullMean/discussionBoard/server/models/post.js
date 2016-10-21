var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	post: {
		type: String,
		required: [true, 'Posts need to say something...'],
		trim: true
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}],
	upVote: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	downVote: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});


var Post = mongoose.model('Post', PostSchema);