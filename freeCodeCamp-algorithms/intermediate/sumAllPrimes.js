/**
 * Sum All Primes
 * 
 * Sum all the prime numbers up to and including the provided number.
 * 
 * A prime number is defined as a number greater than one and having only two divisors,
 * 
 *  one and itself. For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * The provided number may not be a prime.
 */
function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++){
    var numberOfPrimes = 1;
    for(var j = 2; j <= i; j++){
      if( i % j === 0){
        numberOfPrimes += 1;
      }
      if( numberOfPrimes > 2){ //to make it not run any additional time
        break;                 //because if it has more than two factors,
      }                        // automatically it is not a prime number.
    }
    if( numberOfPrimes <= 2){
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10); //should return 17
