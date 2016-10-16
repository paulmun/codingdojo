var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
	passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/,
	LoginSchema = new Schema({

		email: {
			validate: {
				validator: function( email ){
					return emailRegex.test(email);
				},
				message: "{ VALUE } is not a valid email"
			},
			unique: true,
			type: String
		},
		
		name: {
			firstName: {
				type: String,
				required: true,
				trim: true
			},
			lastName: {
				type: String,
				required: true,
				trim: true
			} 
		},

		password: {
			type: String,
			required: true,
			minlength: 8,
			maxlength: 32,
			validate: {
				validator: function( password ) {
					return passwordRegex.test(password);
				},
				message: "Password failed validation, your password must have at least one number, uppercase letter and special character"
			}
		},

		birthday: {
			type: Date,
			required: true,
		},

		created_on: {
			type: Date, 
			required: true, 
			default: new Date
		}
	})

	LoginSchema.pre('save', function(done){
		done();
	})


var Login = mongoose.model('Login', LoginSchema);