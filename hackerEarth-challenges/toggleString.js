/*
You have been given a String S,
consisting of uppercase and lowercase English alphabets. 
You need to change the case of each alphabet in this String. 
That is, all the uppercase letters should be converted to lowercase and all 
the lowercase letters should be converted to uppercase. You need to then print 
the resultant String to output.

Input Format
The first and only line of input contains the String S.

Output Format
Print the resultant String on a single line.

Constraints

1≤|S|≤100 where 

|S| denotes the length of string S.

*/

//my solution

function main(input) {
    var output = "";
    for(var i in input){
        if(input[i] === input[i].toUpperCase()){
            output += input[i].toLowerCase();
        }else {
            output += input[i].toUpperCase();
        }
    }
    process.stdout.write(output);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = ""

process.stdin.on("data", function (input) {
    stdin_input += input
});

process.stdin.on("end", function () {
   main(stdin_input)
});
