/**
*Missing letters
*
*Find the missing letter in the passed letter range and return it.
*
*If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    var currentCharacterCode;
    var nextCharacterCode;
    var range;
    var missingString = "";
    //
    for(var i = 0; i < str.length; i++){
        currentCharacterCode = str.charCodeAt(i);
        nextCharacterCode = str.charCodeAt(i+1);
        //
        if( i === str.length-1){
        return undefined;
        }
        //
        if( currentCharacterCode+1 !== nextCharacterCode ){
        range = nextCharacterCode - currentCharacterCode -1;
        console.log(range);
        //
        for(var j = 0; j < range; j++){
            currentCharacterCode += 1;
            missingString += String.fromCharCode(currentCharacterCode);
        }
        return missingString;
        }
    }
}

fearNotLetter("abce"); //should return "d"
