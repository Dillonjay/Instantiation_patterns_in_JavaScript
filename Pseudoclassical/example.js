//Pseudoclassical.


// Constructor function.
var Dog = function(name) {
	//this = Object.create(Dog.prototype)
	this.name = name;
	this.legs = 4;
	//return this
};
// Attaching methods to the Dog prototype.
Dog.prototype.bark = function() {
		return this.name + ' says...BARK!!';
};
Dog.prototype.getLegs = function() {
		return this.legs;
};



var spot = new Dog('Spot');
spot.bark() // => 'Spot says...BARK!!'
var rover = new Dog('Rover');
rover.bark() //=> 'Rover says...BARK!!'

// Can change methods for Dog by editing the Dog prototype.
// EX:
Dog.prototype.bark = function() {
	return 'I changed via prototypal link'
};
spot.bark() // now returns => 'I changed via prototypal link'
rover.bark() // now returns => 'I changed via prototypal link'


// In this case, both spot and rover have access to the bark and getLegs functions via prototype. 
// Every time Dog is called a link to Dog.prototype will be created. 
// spot.bark === rover.bark => returns true.