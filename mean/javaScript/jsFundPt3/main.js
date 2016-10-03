// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

// Running this in your terminal as you create it can be super helpful since we aren’t manipulating the DOM!

// Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_travelled - set this initially as zero
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “Jay is walking” and increase distance_travelled by 3
// run - have it alert for example “Jay is running” and increase distance_travelled by 10
// crawl - have it alert for example “Jay is crawling” and increase distance_travelled by 1


function personConstructor(x){
	this.name = x;
	this.distance_traveled = 0;
	this.say_name = function(){
		alert(this.name);
	};
	this.say_something = function(x){
		console.log(this.name + " says '" + x + "'");
	};
	this.walk = function(){
		alert(this.name + ' is walking');
		this.distance_traveled += 3;
	};
	this.run = function(){
		alert(this.name + ' is running');
		this.distance_traveled += 10;
	};
	this.crawl = function(){
		alert(this.name + ' is crawling');
		this.distance_traveled += 1;
	};
}

function ninjaConstructor(x){
	this.belts = {
		0: 'Yellow Belt',
		1: 'Orange Belt',
		2: 'Red Belt',
		3: 'Black Belt',
	}
	this.cohorts = {
		0: 'Web Fundamentals',
		1: 'Python',
		2: 'Mean',
		3: 'iOS',
		4: 'Ruby',
	}
	this.name = x;
	this.co = 1;
	this.belt = 0;
	this.cohort = this.cohorts[this.co];
	this.beltLevel = this.belts[this.belt];
	this.levelUp = function(){
		this.belt += 1
	}
}