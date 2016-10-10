'use strict';

// simple express server
var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// mongoDB Connection
mongoose.connect('mongodb://localhost/chickenDash2');
var ChickenSchema = new mongoose.Schema({
	name: String,
	age: Number,
	special: Boolean,
})
mongoose.model('Chicken', ChickenSchema);
var Chicken = mongoose.model('Chicken');


//directory path routing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res) {
	Chicken.find({}, function(err, chicks){
		var chickens = chicks;
		res.render('index', {chickens:chickens});
	})
	
});

app.get('/chicken/new', function(req, res){
	res.render('newChicken');
});

app.get('/chicken/:id', function(req, res){
	Chicken.findById(req.params.id, function(err, chick){
		var chicken = chick;
		res.render('chicken', {chicken:chicken})
	});
});

app.post('/chickens', function(req, res){
	var data = ('POST DATA', req.body)
	console.log(data);
	var chicken = new Chicken();
	chicken.name = data.name;
	chicken.age = data.age;
	chicken.special = data.special;
	chicken.save(function(err){
		res.redirect('/');
	})
});

app.get('/chicken/:id/edit', function(req, res) {
	Chicken.findById(req.params.id, function(err,chicken){
		res.render('edit', {chicken:chicken});	
	});
	
});

app.post('/chickens/:id', function(req, res) {
	var data = ('POST DATA', req.body);
	Chicken.findById(req.params.id, function(err, chicken){
		console.log(chicken);
		chicken.name = data.name;
		chicken.age = data.age;
		chicken.special = data.special;
		chicken.save(function(err){
			if(err){
				console.log(err);
			}
			res.redirect('/');
		});
	})
});

app.post('/chickens/:id/destroy', function(req, res) {
	Chicken.remove({_id:req.params.id}, function(err){
		if(err){
			console.log(err);
		}
		res.redirect('/');
	})

});

var server = app.listen(5000); 
