/*
Make a Person 

Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to 
be a string.

These methods must be the only avail
*/

//my solution
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var names = firstAndLast.split(" ");
  var firstName = names[0];
  var lastName = names[1];
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
    this.getFirstName = function(){
      return firstName;
    };
    this.getLastName = function(){
      return lastName;
    };
    this.setFirstName = function(first){
      firstName = first;
    };
    this.setLastName = function(last){
      lastName = last;
    };
    this.setFullName = function(firstAndLast){
      var firstLast = firstAndLast.split(" ");
      var first = firstLast[0];
      var last = firstLast[1];
      firstName = first;
      lastName = last;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
