/*
You have been given a String S. You need to find and print whether this 
string is a palindrome or not. If yes, print "YES" (without quotes), 
else print "NO" (without quotes).

Input Format
The first and only line of input contains the String S. The String shall 
consist of lowercase English alphabets only.

Output Format
Print the required answer on a single line.

Constraints 
1≤|S|≤100

Note
String 
S consists of lowercase English Alphabets only.
*/

function main(input) {
    var a = "NO";
    if( input === input.split("").reverse().join("")){
        a = "YES";
    }
    process.stdout.write(a);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

