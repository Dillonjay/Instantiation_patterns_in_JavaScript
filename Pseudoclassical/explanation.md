### Pseudoclassical. 
Pseudoclassical instantiation, like prototypal, uses the prototype of an an object to pass down methods. 
Pseudoclassical uses 'this' and 'new' keywords to acchieve the same results as prototypal instantiation. 
Ex: 
```
var Dog = function(name){ 
	this.name = name;
	this.legs = 4
}
```
This is what happens under the hood inside of the Dog constructor.
```
	this = Object.create(Dog.prototype)
	return this
```
You create a new instance of Dog using the keyword 'new'
Ex: 
```
var myDog = new Dog('Spot');
```
The above lines of code are equivalent to the code below.
```
var myDog = Object.create(Dog.prototype);
Dog.call('Spot');
```
### Pros.
Able to edit many parts in your code base by editing the prototype as methods are attached directly to the constructors prototype. 

### Cons.
May be confusing to someone just starting out as a few steps are taken under the hood. 