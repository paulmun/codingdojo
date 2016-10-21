var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var CommentSchema = new Schema({
	comment: {
		type: String,
		required: [true, 'Comments need to say something...'],
		trim: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});


var Comment = mongoose.model('Comment', CommentSchema);