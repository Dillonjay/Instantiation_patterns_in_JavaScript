// Functional. 

// Constructor function.
var Dog = function(name) {
	var dog = {};
	dog.name = name;
	dog.legs = 4;
	dog.bark = function() {
		return this.name + ' says...BARK!!';
	};
	dog.getLegs = function() {
		return this.legs;
	};
	return dog;
};

var spot = Dog('Spot');
// spot.bark() => 'Spot says...BARK!!'
var rover = Dog('Rover');
// rover.bark() => 'Rover says...BARK!!'

// In this case, both spot and rover have different instances of the bark and getLegs functions. 
// Every time Dog is called, two brand new functiions are created. 
// spot.bark === rover.bark => returns false.
// Although they do the same thing, they are not deeply equal functions.