$('document').ready(function(){
	var socket = io.connect();
	$('#up').click(function(event){
		event.preventDefault();
		socket.emit('pushaMan');
	});
	$('#down').click(function(event){
		socket.emit('reset'); 
	})
	socket.on('count', function(counter){
		$('#counter').html('<h2>'+counter+'</h2>');
	});

})

