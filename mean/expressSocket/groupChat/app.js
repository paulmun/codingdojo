'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index', oldMessages);
});

var server = app.listen(5000); 
var io = require('socket.io').listen(server);
var counter = 0;
var oldMessages = [];

io.sockets.on('connection', function(socket) {
	var newMessages = [];
	socket.emit('load', oldMessages);
	socket.on('newName', function(data){
		socket.name = data.name;
		console.log(socket.name);
	});
	socket.on('newMessage', function(data){
		var newMess = {
			'name' : socket.name,
			'message' : data.message,
		};
		console.log(newMess);
		oldMessages.push(newMess);
		io.emit('loadNew', newMess);
	})

});