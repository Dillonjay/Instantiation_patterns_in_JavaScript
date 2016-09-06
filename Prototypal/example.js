// Prototypal.

// The dogMethods object with methods for dogs. 
var dogMethods = { 
	bark: function() {
		return this.name + ' says...BARK!!';
	},
	getLegs: function() {
		return this.legs;
	}
};

// Constructor function.
var Dog = function(name) {
	// Attach dog via prototype to the dogMethods
	var dog = Object.create(dogMethods);
	dog.name = name;
	dog.legs = 4;
	return dog;
};



var spot = Dog('Spot');
spot.bark() // => 'Spot says...BARK!!'
var rover = Dog('Rover');
rover.bark() //=> 'Rover says...BARK!!'

// Can change methods for dog by editing the dogMethods object.
// EX:
dogMethods.bark = function() {
	return 'I changed via prototypal link'
};
spot.bark() // now returns => 'I changed via prototypal link'
rover.bark() // now returns => 'I changed via prototypal link'


// In this case, both spot and rover have access to the bark and getLegs functions via prototype. 
// Every time Dog is called, a new prototypal link to dogMethods will be created.
// spot.bark === rover.bark => returns true.