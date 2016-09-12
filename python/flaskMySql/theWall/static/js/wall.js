$('#register').click(function(event){
	event.preventDefault();
	$('#defaultButtons').toggle();
	$('#regForm').toggle();
});

$('#login').click(function(event){
	event.preventDefault();
	$('#defaultButtons').toggle();
	$('#logForm').toggle();
});

$('#regBack').click(function(event){
	event.preventDefault();
	$('#defaultButtons').toggle();
	$('#regForm').toggle();
});

$('#logBack').click(function(event){
	event.preventDefault();
	$('#defaultButtons').toggle();
	$('#logForm').toggle();
});