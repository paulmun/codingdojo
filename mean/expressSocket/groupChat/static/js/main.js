$('document').ready(function(){
	var socket = io.connect();
	var newMessages = [];
	var oldMessages = [];

	$('#nameForm form').submit(function(event){
		event.preventDefault();
		$('#nameForm').toggle();
		$('#convoBoard').toggle();
		var data = {};
		$(this).serializeArray().map(function(x) { data[x.name] = x.value; });
		socket.emit('newName', data);
	})

	$('#convoBoard form').submit(function(e){
		e.preventDefault();
		var data = {};
		$(this).serializeArray().map(function(x) { data[x.name] = x.value; });
		socket.emit('newMessage', data);
	})

	socket.on('load', function(data){
		oldMessages = data;
		for(var i = 0; i<oldMessages.length; i++){
			item = '<tr><td>'+i.name+'</td><td>'+i.message+'</td></tr>'
			$('#oldMessages').append(item);	
		};
	});

	socket.on('loadNew', function(data){
		var item = '<tr><td><b>'+data.name+'</b></td><td>'+data.message+'</td></tr>';
			$('#newMessages').append(item);
	});

});