$(document).ready(function(){
	var board = [	[136,38,37,6,5,37,38,136],
					[4,4,4,4,4,4,4,4],
					[0,1,0,1,0,1,0,1],
					[1,0,1,0,1,0,1,0],
					[0,1,0,1,0,1,0,1],
					[1,0,1,0,1,0,1,0],
					[7,7,7,7,7,7,7,7],
					[130,54,55,8,9,55,54,130]];
	



	// function poke(num){
	// 	$.ajax({
	// 		url:"http://pokeapi.co/api/v2/pokemon/"+num,
	// 		method:"get"
	// 	}).done(function(data){
	// 		console.log(data);
	// 		// $('block'+num).append.('img').attr('src'.data.sprites.front-shiny);
	// 	});
	// };					
	var pokemon={}
	var cont = [];
	var box = $('<div id="box"</div>');
	for(var i=0; i < board.length; i++){
		var row=[];
		var block="";
		for(var x=0; x<board[i].length;x++){
			if(i%2===0&&x%2===0){
				block = $('<div></div>').attr('class','block block0 block'+board[i][x]);
				row.push(block);
			}
			else if(i%2===0&&x%2===1){
				block = $('<div></div>').attr('class','block block1 block'+board[i][x]);
				row.push(block);	
			}
			else if(i%2===1&&x%2===0){
				block = $('<div></div>').attr('class','block block1 block'+board[i][x]);
				row.push(block);
			}
			else{
				block = $('<div></div>').attr('class','block block0 block'+board[i][x]);
				row.push(block);
			}
			pokemon[board[i][x]]=true;
		};
		cont.push($('<div class="row"></div>').append(row));
	}
	box.append(cont);
	$('#wrapper').append(box);

	console.log(pokemon);

});