### Prototypal. 
Prototypal instantiation uses the prototype of an an object to pass down methods. Ex Array.prototype.push().
Every single instance of an array is able to access the push function through the Array.prototype.
The way to attach a prototype to an object is by using the Object.create() method. This method will create a new object with a link to the prototype desired. 
Ex: 
```
objWithMethod = {func: function(){alert('Hello World')}};
// newObj will be an empty object with access to the func function via prototypal link.
newObj = Object.create(objWithMethod);
console.log(newObj) // logs an empty object  => {};
newObj.func() // alerts => 'Hello World'
```
### Pros.
Able to edit many parts in your code base by editing the prototype. 

### Cons.
If you accidently change the a method on a prototype, you may have unintended behavior in your code.  