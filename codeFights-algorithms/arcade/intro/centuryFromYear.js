/*
Given a year, return the century it is in. The first century spans from the year
1 up to and including the year 100, the second - from the year 101 up to and 
including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.

Input/Output

[time limit] 4000ms (js)
[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.

*/

function centuryFromYear(year) {
    //account for when its a multiple of 100
    if (year % 100 === 0){
        var result = year/100;
        result = Math.floor(result);
        return result;
    }// get century when its not a multiple of 100           
    else{
        var result = year/100;
        return Math.floor(result) + 1;
    }
};
