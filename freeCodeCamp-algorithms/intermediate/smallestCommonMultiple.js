/**
 * Smallest Common Multiple
 * 
 * Find the smallest common multiple of the provided parameters that 
 * 
 * can be evenly divided by both, as well as by all sequential numbers 
 * 
 * in the range between these parameters.The range will be an array of 
 * 
 * two numbers that will not necessarily be in numerical order.e.g. for 
 * 
 * 1 and 3 - find the smallest common multiple of both 1 and 3 that is 
 * 
 * evenly divisible by all numbers between 1 and 3.
 */

// 
function smallestCommons(arr) {
  var arrMax = Math.max.apply(null,arr);
  var arrMin = Math.min.apply(null,arr);
  var i = arrMax*2;
  //
  for(;;){
    var found = true;
    //
     for( var j = arrMin ; j <= arrMax; j++){
       if( i % j !== 0 ){
         found = false;
         break;
       }
     }
    //
    if( found ){
      return i;
    }
    else{
      i++;
    }
  }
}

smallestCommons([1,5]); // should return 60
