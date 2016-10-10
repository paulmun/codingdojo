'use strict';

// simple express server
var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	mongoose = require('mongoose');

// mongoDB Connection
mongoose.connect('mongodb://localhost/chickenDash');
var ChickenSchema = new mongoose.Schema({
	name: String,
	age: Number,
	rabid: Boolean,
})
mongoose.model('Chicken', ChickenSchema);
var Chicken = mongoose.model('Chicken');


//directory path routing
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res) {
	Chicken.find({}, function(err, chickens){ 
		oldChickens = chickens
	});
    res.render('index');
});
app.get('/chicken/new', function(req, res){
	res.render('newChicken');
});
app.get('/chicken/:id', function(req, res){
	res.render('chicken');
});
app.get('/chicken/:id/edit', function(req, res){
	var currChicken;
	Chicken.find({_id:req.params.id}, function(err, chicken){
		currChicken = chicken
	});
	console.log(currChicken);
	res.render('editChicken', currChicken);
});
app.post('/chicken/:id/submit', function(req, res) {
    res.redirect('/');
});
app.post('/chickens/create', function(req, res) {
    res.render('/', newChickens);
});
app.post('/chickens/destroy', function(req, res) {
    res.redirect('/');
});


//sockets
var server = app.listen(5000); 
var io = require('socket.io').listen(server);
var oldChickens = [];

io.sockets.on('connection', function(socket) {
	socket.emit('load', oldChickens);
	socket.on('newChicken', function(data){
		var newChicken = new Chicken()
		newChicken.name = data.name;
		newChicken.age = data.age;
		newChicken.rabid = data.rabid;
		newChicken.save(function(err){});
		io.emit('loadNew', newChicken);
	});
	socket.on('editChicken', function(data){
		var currChicken;
		Chicken.findById(req.params.id, function(err, chicken){
			if(err){
				res.send(err);
			}
			chicken.name = data.name;
			chicken.age = data.body.age;
			chicken.rabid = data.body.rabid;
			chicken.save(function(err){
				if(err){
					res.send(err);
				}
				else{
					console.log('chicken has been updated!');
				}
			console.log(chicken);
			});
		});
	});
});