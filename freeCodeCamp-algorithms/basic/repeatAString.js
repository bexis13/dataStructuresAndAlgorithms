/*
Repeat a string repeat a string 

Repeat a given string (first argument) num times (second argument). Return an 
empty string if num is not a positive number.
*/


function repeatStringNumTimes(str, num) {
  var result="";
  if (num <= 0){
    return "";
  }
   else{
     for (var i =0;i<num; i++){
       result += str;
     } 
   return result;
  }
}

repeatStringNumTimes("abc", 3);