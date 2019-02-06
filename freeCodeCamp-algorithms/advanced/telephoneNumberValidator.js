/*
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it 
has the format of a valid US number. The following are examples of valid 
formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 
800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate 
or reject the US phone number based on any combination of the 
formats provided above. The area code is required. If the country 
code is provided, you must confirm that the country code is 1. Return
 true if the string is a valid US phone number; otherwise return false.

 */

//my soltion - currently incomplete
function telephoneCheck(str) {
  // store all allowed values
  let storage = {
    1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5,
    6 : 6, 7 : 7, 8 : 8, 9 : 9, 0 : 0,
    " " : " ", "-" : "-", "(" : "(",
    ")" : ")"
  }
  //test for any invalid characters
  let len = str.length;
  for( let i = 0; i < len; i++){
    if( storage[str[i]] == undefined){
      return false;
    }
  }
  return true;
}

/* some tests from freecodecamp- uncomment anyone to test it
telephoneCheck("555-555-5555") //should return a boolean.
Passed
telephoneCheck("1 555-555-5555") // should return true.
Passed
telephoneCheck("1 (555) 555-5555") //should return true.
Passed
telephoneCheck("5555555555") //should return true.
Passed
telephoneCheck("555-555-5555") //should return true.
Passed
telephoneCheck("(555)555-5555") //should return true.
Passed
telephoneCheck("1(555)555-5555") //should return true.
telephoneCheck("555-5555") //should return false.
telephoneCheck("5555555") //should return false.
telephoneCheck("1 555)555-5555") //should return false.
Passed
telephoneCheck("1 555 555 5555") //should return true.
Passed
telephoneCheck("1 456 789 4444") //should return true.
Passed
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6054756961)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
Passed
telephoneCheck("(555)5(55?)-5555") should return false.
*/