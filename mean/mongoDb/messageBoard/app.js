'use strict';

// simple express server
var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// mongoDB Connection
mongoose.connect('mongodb://localhost/messageBoard');
var PostSchema = new mongoose.Schema({
	name: {type: String, required: true},
	message: {type: String, required: true},
	comments: [{
		name: {type: String, required: true},
		message: {type: String, required: true},
	}]
});

mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');


//directory path routing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res) {
	var posts = Post.find({}, function(err, result){
		posts = result;
		res.render('index', {posts:posts});	
	})
});

app.post('/post/new', function(req, res){
	var data = ('POST DATA', req.body)
	console.log(data);
	var newPost = new Post();
	newPost.name = data.name;
	newPost.message = data.message;
	newPost.save(function(err){
		if(err){
			console.log(err);
		}
		res.redirect('/');	
	})
	
});

app.post('/comment/new/:id', function(req, res){
	var data = ('POST DATA', req.body)
	Post.findById(req.params.id, function(err, post){
		console.log(post);
		var newComment = post;
		newComment.comments.push({name: data.name, message: data.message});
		newComment.save(function(err){
			if(err){
				console.log(err);
			}
			res.redirect('/');
		});
		
	});
});

var server = app.listen(5000); 
