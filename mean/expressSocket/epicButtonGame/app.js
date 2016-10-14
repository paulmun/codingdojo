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
    res.render('index');
});

var server = app.listen(5000);
 
var io = require('socket.io').listen(server);

var counter = 0;

io.sockets.on('connection', function(socket) {
	io.emit('count',counter);
	socket.on('pushaMan', function(data){
		counter ++;
		io.emit('count', counter);
	});
	socket.on('reset', function(data){
		counter = 0;
		io.emit('count', counter);
	});
});

