var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TopicSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Please give your topic a title'],
		trim: true
	},
	description: String,
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	category: {
		type: String,
		required: [true, 'Please chose a category']
	}
});


var Topic = mongoose.model('Topic', TopicSchema);