var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	answer: {
		type: String,
		minlength: [5, 'Sorry! Questions must be at least 5 characters long'],
		required: [true, 'Please enter a name'],
		unique: true,
		uniqueCaseInsensitive: true,
		trim: true
	},
	details: String,
	likes: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}]
});

var Answer = mongoose.model('Answer', AnswerSchema);