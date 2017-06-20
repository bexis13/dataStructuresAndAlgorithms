/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

//my solution

function findLongestWord(str) {
    var string= str.split(" ");
    var maxString = string[0].length;
   
    for (var i=0; i < string.length; i++){ //find string with the longest length
        if(string[i].length > maxString){
            maxString = string[i].length;
        }
    }
    return maxString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

