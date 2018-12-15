/*
Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.
Use the array methods slice and splice to copy 
each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should 
remain the same after the function runs.

My solution below
 */

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copyOfarr2 = [...arr2];
  copyOfarr2.splice(n,0, ...(arr1.slice(0)));
  return copyOfarr2;
}

// some tests
frankenSplice([1, 2, 3], [4, 5], 1); // should return [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1); // should return ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]