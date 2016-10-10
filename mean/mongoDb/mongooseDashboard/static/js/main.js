$(document).ready(function(){
	var socket = io.connect();
	socket.on('load', function(oldChickens){
		console.log('chicken')
		for(var i=0; i<oldChickens.length; i++){
			console.log(oldChickens[i]._id);
			item='<tr><td>'+oldChickens[i].name+'</td><td>'+oldChickens[i].age+'</td><td>'+oldChickens[i].rabid+'</td><td><a href="/chicken/'+oldChickens[i]._id+'/edit">Edit</a></td></tr>'
			$('#chickenList').append(item);
		}
	});
	socket.on('loadNew', function(newChicken){
		console.log(newChicken);
		item='<tr><td>'+newChicken.name+'</td><td>'+newChicken.age+'</td><td>'+newChicken.rabid+'</td><td><a href="/chicken/'+newChicken._id+'/edit">Edit</a></td></tr>'
		$('#chickenList').append(item);
	});

	$('#newChickenForm').submit(function(e){
		e.preventDefault();
		var data = {};
		$(this).serializeArray().map(function(x) {data[x.name] = x.value; });
		socket.emit('newChicken', data);
		$(location).attr('href', '/');
	});
	
	$('#editChickenForm').submit(function(e){
		e.preventDefault();
		var data = {};
		$(this).serializeArray().map(function(x) {data[x.name] = x.value; });
		socket.emit('editChicken', data);
		$(location).attr('href', '/');
	});

})