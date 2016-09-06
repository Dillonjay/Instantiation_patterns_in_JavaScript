//Pseudoclassical.

Dog.prorotype.bark = function() {
		return this.name + ' says...BARK!!';
};
Dog.prototype.getLegs = function() {
		return this.legs;
};

// Constructor function.
var Dog = function(name) {
	//this = Object.create(Dog.prototype)
	this.name = name;
	this.legs = 4;
	//return this
};



var spot = Dog('Spot');
spot.bark() // => 'Spot says...BARK!!'
var rover = Dog('Rover');
rover.bark() //=> 'Rover says...BARK!!'

// Can change methods for dog by editing the dogMethods object.
// EX:
Dog.prototype.bark = function() {
	return 'I changed via prototypal link'
};
spot.bark() // now returns => 'I changed via prototypal link'
rover.bark() // now returns => 'I changed via prototypal link'


// In this case, both spot and rover have access to the bark and getLegs functions via prototype. 
// Every time Dog is called, a new prototypal link to dogMethods will be created.
// spot.bark === rover.bark => returns true.