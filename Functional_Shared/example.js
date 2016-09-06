// Functional-Shared. 

// Constructor function.
var Dog = function(name) {
	var dog = {};
	dog.name = name;
	dog.legs = 4;
	// Both bark and getLegs point to an outside function. 
	dog.bark = dogBark;
	dog.getLegs = getDogLegs;
	return dog;
};
// Functions defined outside of the constructor. 
var dogBark = function() {
	return this.name + ' says...BARK!!';
};
var getDogLegs = function() {
	return this.legs;
}

var spot = Dog('Spot');
// spot.bark() => 'Spot says...BARK!!'
var rover = Dog('Rover');
// rover.bark() => 'Rover says...BARK!!'

// In this case, both spot and rover have the same instance of the bark and getLegs functions. 

// spot.bark === rover.bark => returns true.
// Both methods point to the same outside function. 