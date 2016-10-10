'use strict';

// simple express server
var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', __dirname + './client/views'); 
app.set('view engine', 'ejs');


//routes
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

var server = app.listen(5000); 
