'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');




app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
});

var server = app.listen(5000);
 
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.on('form_data', function(data){
		data.luckyNumber = Math.floor(Math.random()*1001);
		socket.emit('form_view', data);
	});
});

