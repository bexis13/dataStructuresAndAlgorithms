/**
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 *  in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  //
  var map = {"&" :"&amp;", "<" : "&lt;", ">" : "&gt;", '"':"&quot;", "'" : "&apos;"};
  var newStr = "";
  //
  for(var i = 0; i < str.length; i++){
    if( map[str[i]]){
      newStr += map[str[i]];
    }
    else{
      newStr += str[i];
    }
  }
  //
  return newStr;
}

convertHTML("Dolce & Gabbana");
