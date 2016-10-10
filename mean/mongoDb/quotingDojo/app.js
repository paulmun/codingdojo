'use strict';

// simple express server
var express = require('express'),
	app = express(),
	router = express.Router(),
	path = require('path'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// mongoDB Connection
mongoose.connect('mongodb://localhost/quotingDojo');
var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String,
	created_at: {type: Date, default: Date.now}
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


//directory path routing
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


//routes
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/quotes', function(req, res){
	var quoteList = Quote.find({}, function(err, quotes){
		quoteList = quotes;
		res.render('quotes', {quotes:quoteList});
	});
});
app.post('/quotes', function(req, res){
	var quote = new Quote();
	var data = ('POST DATA', req.body);
	console.log(data);
	quote.name = data.name;
	quote.quote = data.quote;
	quote.save(function(err){
		if(err){
			console.log(err)
		}
		else{
			console.log('succes!');
		}
	})
	console.log(quote);
	res.redirect('quotes');
});


var server = app.listen(5000); 
