var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	question: {
		type: String,
		minlength: [10, 'Sorry! Questions must be at least 10 characters long'],
		required: [true, 'Please enter a name'],
		unique: true,
		uniqueCaseInsensitive: true,
		trim: true
	},
	description: String,
	answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
});

var Question = mongoose.model('Question', QuestionSchema);