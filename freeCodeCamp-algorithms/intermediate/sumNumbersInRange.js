/*
Sum All Numbers in a Range 

We'll pass you an array of two numbers. Return the sum of those two numbers
and all numbers between them.

The lowest number will not always come first.
*/

//my solution
function sumAll(arr) {
  var storage = 0;
  for(var i = Math.min.apply(null,arr); i <= Math.max.apply(null,arr); i++ ){
    storage += i;
  }
  return storage;
}
//test
sumAll([1, 4]);
