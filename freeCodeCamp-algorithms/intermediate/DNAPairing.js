/**
*DNA Pairing
*The DNA strand is missing the pairing element. Take each character, 
*
*get its pair, and return the results as a 2d array.
*
*Base pairs are a pair of AT and CG. Match the missing element to the provided character.
*
*Return the provided character as the first element in each array.
*
*For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
*
*The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
    str = str.split('');
    var strArr = [];
    var firstPair = ["A", "T"];
    var secondPair = ["C", "G"];
    var send;
    //
    for ( var i = 0; i < str.length; i++){
        //its in first pair
        if( firstPair.indexOf(str[i]) !== -1){
        if( str[i] === firstPair[0]){
            send = [str[i], firstPair[1]];
            strArr.push(send);
        }else{
            send = [ str[i], firstPair[0] ];
            strArr.push(send);
        }
        }//its in second pair
        else{
        if( str[i] === secondPair[0]){
            send = [str[i], secondPair[1]];
            strArr.push(send);
        }else{
            send = [  str[i], secondPair[0] ];
            strArr.push(send);
        }
        }
    }
    return strArr;
}

pairElement("GCG"); //should return [["G", "C"], ["C","G"],["G", "C"]]
