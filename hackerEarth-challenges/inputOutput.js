/*
Read from STDIN, Write to STDOUT
Read different types of data from standard input, process them as shown in output format and print the answer to standard output.

Input format:
First line contains integer N. 
Second line contains string S.

Output format: 
First line should contain N x 2. 
Second line should contain the same string S.

Constraints:

0≤N≤10

1≤|S|≤15 where |S|= length of string S

sample input:
5
helloworld  

sample output:
10
helloworld
*/

function main(input) {
  var data = input.split('\n'); //split string on new lines
  process.stdout.write(data[0]*2 + '\n' + data[1]);

    
}

process.stdin.resume(); //initialize the stdin

process.stdin.setEncoding("utf-8"); //set encoding so we dont get buffer objects
var stdin_input = "";


process.stdin.on("data", function (input) { //store received data variable input
    stdin_input += input;
});

process.stdin.on("end", function () { //start main function with input on stream end
   main(stdin_input);
});