'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('static'));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.post('/result', function(req, res){
	res.render('result.ejs', ('POST DATA', req.body));
});

app.listen(5000);