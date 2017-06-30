/* 
Chunky Monkey 

Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array.
*/

//my solution

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrays = arr;
  var array = [];

  while (arrays.length> size) {array.push(arrays.splice(0,size));}
     if (arrays.length <= size){ array.push(arrays);}
  return array;
}

//test
chunkArrayInGroups(["a", "b", "c", "d"], 2);
