/**
*Translate the provided string to pig latin.
*( https://en.wikipedia.org/wiki/Pig_Latin) Pig Latin  takes the first consonant (or consonant cluster) of an English word, 
*moves it to the end of the word and suffixes an "ay".
*If a word begins with a vowel you just add "way" to the end.
*Input strings are guaranteed to be English words in all lowercase.
*Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if( vowels.indexOf( str[0]) !== -1){
     str = str + "way";
     return str;
  }
  var consonants = "";
  str = str.split('');
  for( var i = 0; i < str.length; i++){
    if( vowels.indexOf( str[0]) !== -1){
      break;
    }
    consonants += str[0];
    str.shift();
    
  }
  str = str.join('');
  str = str + consonants + "ay";
  return str;
 
}

translatePigLatin("consonant"); //should return onsonantcay
