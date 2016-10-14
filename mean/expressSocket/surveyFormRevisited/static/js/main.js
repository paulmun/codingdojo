$('document').ready(function(){
	var socket = io.connect();
	$('form').submit(function(event){
		event.preventDefault();
		var data = {};
		$(this).serializeArray().map(function(x) { data[x.name] = x.value; });
		socket.emit('form_data', data);
	});
	socket.on('form_view', function(data){
		$('#form_view').toggle();
		$('#name').html('<p>You emitted the following information to the server: {name: '+data.name+', location: '+data.location+', language:'+data.language+', comment:'+data.comment+'} </p>');
	});

})

