function math(){
	this.add = function(x, y){
		var sum = 0;
		for(i = x; i < y+1; i++){
			sum += i;
		}
		console.log(sum);
	}

	this.min = function(arr){
		min = arr[0];
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < min){
				min = arr[i];
			}
		}
		return min;
	}

	this.avg = function(arr){
		sum = 0;
		for(var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum / arr.length;
	}
}

var person = {
	name: 'Paul',
	distance_traveled: 0,
	say_name: function(){
		alert(this.name);
	},
	say_something: function(x){
		console.log(this.name + " says '" + x + "'");
	},
	walk: function(){
		alert(this.name + ' is walking');
		this.distance_traveled += 3;
	},
	run: function(){
		alert(this.name + ' is running');
		this.distance_traveled += 10;
	},
	crawl: function(){
		alert(this.name + ' is crawling');
		this.distance_traveled += 1;
	},
}

