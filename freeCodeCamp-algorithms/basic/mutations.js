/*
Mutations 

Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string 
"hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in
"line" are present in "Alien".
*/

//my solution
function mutation(arr) {
  var value;
  for (var i =0; i <arr[1].length ; i++){
    value = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase());
    if (value === -1){ return false;}
  }
  return true;
}
//test
mutation(["hello", "hey"]);