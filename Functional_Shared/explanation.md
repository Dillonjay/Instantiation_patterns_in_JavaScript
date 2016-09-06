### Functional-Shared. 
Functional-Shared instantiation is similar to functional except for one detail. The constructor function will point to an outside source for its methods. If you use the Functional-Shared pattern, you will only need to create methods one time.

### Pros.
Uses less memory than the functional style. The constructor will point to outside functions for its methods. New instances of a method are not created every time the constructor is called. 

### Cons.
Editing methods in the future may become confusing for someone just starting out. 
