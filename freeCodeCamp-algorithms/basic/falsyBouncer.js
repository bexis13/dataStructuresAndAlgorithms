/*
Falsy Bouncer 

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

//my solution
function bouncer(arr) {
  function falsy(value){
    return Boolean(value) === true;
  }
  return arr.filter(falsy);
  
}
//test
bouncer([7, "ate", "", false, 9]);
