/**
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci
 *  numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * Every additional number in the sequence is the sum of the two previous numbers. 
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
 * less than 10 are 1, 1, 3, and 5.
 */


function sumFibs(num) {
  var fibArr = [1,1];
  var fibSum = 2;
  for( var i = 2; i <= num; i++){
    //
    fibArr.push( fibArr[i-1] + fibArr[i-2]);
    //
    if( fibArr[i] % 2 === 1 && fibArr[i] <= num){
      fibSum = fibSum + fibArr[i];
    }
  }
  return fibSum;
}

sumFibs(4);
