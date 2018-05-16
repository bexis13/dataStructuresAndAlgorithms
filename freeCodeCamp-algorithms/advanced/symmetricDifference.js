/**
 * Symmetric Difference
 * 
 * Create a function that takes two or more arrays and returns an array
 * 
 * of the symmetric difference (△ or ⊕) of the provided arrays.
 * 
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
 * 
 * the mathematical term "symmetric difference" of two sets is the set of
 * 
 * elements which are in either of the two sets, but not in both
 * 
 * (A △ B = C = {1, 4}). For every additional symmetric difference you 
 * 
 * take (say on a set D = {2, 3}), you should get the set with elements 
 * 
 * which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function sym(args) {
    //we will first write a closure to return the
  // symetric difference of two arrays, 
  function symDiff(arrOne, arrTwo){
    var output = [];
    //
    var previousElements = "";
    for( var i = 0; i < arrOne.length; i++){
      if(previousElements.indexOf(arrOne[i]) !== -1){
        continue;
      }
      previousElements += arrOne[i];
      var found = false;
      for(var j = 0; j < arrTwo.length; j++){
        if(arrOne[i] === arrTwo[j]){
          found = true;
          break;
        }
      }
      if(!found){
        output.push(arrOne[i]);
      }
    }
    //
    previousElements = "";
    for( var k = 0; k < arrTwo.length; k++){
      if(previousElements.indexOf(arrTwo[k]) !== -1){
        continue;
      }
      previousElements += arrTwo[k];
      var foundElement = false;
      for(var l = 0; l < arrOne.length; l++){
        if(arrTwo[k] === arrOne[l]){
          foundElement = true;
          break;
        }
      }
      if(!foundElement){
        output.push(arrTwo[k]);
      }
    }
    return output;
  }
  //Then first call is on the first and second 
  //arrays in args, then call the result of the 3rd, the 
  //result on the fourth and so on
  if( arguments.length === 2){
    return symDiff(arguments[0], arguments[1]);
  }else{
    var numberOfTimes = arguments.length-2;
    var result = symDiff(arguments[0], arguments[1]);
    var pointer = 2;
    var counter = 0;
    //
    while( counter < numberOfTimes ){
      result = symDiff( result, arguments[pointer]);
      pointer++;
      counter++;
    }
    return result;
  }
}


sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].

sym([1, 2, 3], [5, 2, 1, 4]); //should contain only three elements.

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should contain only three elements.

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should contain only three elements.

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should contain only five elements.

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements.
