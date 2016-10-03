x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']

function iterarr(arr){
	for (var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
}

iterarr(x);

x.push(100);

x.push(['hello', 'world', 'Javascript is fun']);

console.log(x);

function madadder(){
	var sum = 0;
	for(var i = 1; i < 501; i++){
		sum += i;
	}
	console.log(sum);
}

madadder();

function minfinder(arr){
	var min = arr[0]
	for(var i = 1; i < arr.length; i++){
		if(arr[i] < min) min = arr[i]
	}
	console.log(min)
}

minfinder([1, 5, 90, 25, -3, 0]);

function avgfinder(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum/arr.length);
}

avgfinder([1, 5, 90, 25, -3, 0]);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

function keyval(obj){
	for(key in obj){
		console.log('Key: ' + key + ' Val: '+ obj[key]);
	}
}

keyval(new_ninja);