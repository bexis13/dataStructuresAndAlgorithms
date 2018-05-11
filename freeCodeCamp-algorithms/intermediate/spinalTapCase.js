/**
 * Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case 
 * 
 * is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str =  str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  
  return str.replace(/\s|_/g,"-");
}

spinalCase('This Is Spinal Tap');  // should return this-is-spinal-tap
