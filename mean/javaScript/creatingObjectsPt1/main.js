function VehicleConstructor(name, wheels, passengers){
	var vehicle = {};

	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;
	vehicle.noise = 'meemeep';

	vehicle.makeNoise = function(){
		console.log(vehicle.noise);
	}
	return vehicle
}

var bike = VehicleConstructor('Bike', 2, 0);
bike.noise = 'ring ring!';
bike.makeNoise();

var sedan = VehicleConstructor('Sedan', 4, 4);
sedan.noise = 'Honk Honk!';
sedan.makeNoise();

var bus = VehicleConstructor('Bus', 4, 0);
bus.pickup = function(x){
	bus.passengers += x;
}