var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
	console.log('client request URL: ', request.url);

	if(request.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/cars/new'){
		fs.readFile('views/newcar.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/img/car.png'){
		fs.readFile('img/car.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/img/cat.png'){
		fs.readFile('img/cat.png', function(errors, contents){
			response.writeHead(200, {'Content-type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}

	else{
		response.writeHead(404);
		response.end('File not found');
	}
})


server.listen(7077);
console.log("Running in localhost at port 7077");