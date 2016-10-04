function VehicleConstructor(name, wheels, passengers){
	var distance_traveled = 0;
	var updateDistanceTravelled = function(x){
		distance_traveled += this.speed * x;
	}
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.noise = 'meemeep';
	this.speed = 0;
	
	this.move = function(x){
		updateDistanceTravelled.call(this,x);
		this.makeNoise();
	}
	this.checkMiles = function(){
		console.log(distance_traveled);
	}

	this.randNum = function(){
		return Math.floor(Math.random()*10.99);
	}
	this.randLetter = function(){
		return String.fromCharCode(Math.floor(Math.random()*(90-65)+65));
	}

	this.vinMaker = function(){
		vin = [];

		vin.push(this.randNum());
		for(var i = 0; i < 4; i++){
			vin.push(this.randLetter());
		}
		for(var i = 0; i < 4; i++){
			vin.push(this.randNum());
		}
		vin.push(this.randLetter());
		for(var i = 0; i < 6; i++){
			vin.push(this.randNum());	
		}

		return vin.join('');
	}

	this.vin = this.vinMaker();
}
VehicleConstructor.prototype.makeNoise = function(){
	console.log(this.noise);
	return this;
}

var bike = new VehicleConstructor('Bike', 2, 0);
bike.noise = 'ring ring!';
bike.speed = 15
bike.move(5);
bike.checkMiles();

var sedan = new VehicleConstructor('Sedan', 4, 4);
sedan.noise = 'Honk Honk!';
sedan.move(10);
sedan.checkMiles();

var bus = new VehicleConstructor('Bus', 4, 0);
bus.pickup = function(x){
	bus.passengers += x;
}



