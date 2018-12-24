/* Seek and Destroy

You will be provided with an initial array 
(the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements
 from the initial array that are of the same value as these arguments.

 my solution below
*/

function destroyer(arr) {

  // Remove all the values
  for( let i = 1; i < arguments.length; i++){
    let possibleIndex =  arr.indexOf(arguments[i]);
    if(  possibleIndex != -1 ){
      arr.splice(possibleIndex,1);
    }
    possibleIndex =  arr.indexOf(arguments[i]);
    if(  possibleIndex != -1 ){
      i -= 1;
    }
  }
  return arr;
}

//some tests
destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1]