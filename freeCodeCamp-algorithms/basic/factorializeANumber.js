/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

*/

//my answer
function factorialize(number) {
  
  if (number === 0){
    return 1;
  }
  if (number < 0){
    return console.log("no negatives allowed");
  }
  var factorial=1; 
  //multiply all the numbers between one and the number
  for (var i= 1;i<=number;i++){
  
     factorial *= i; 
  }
  return factorial;
}
factorialize(6);
