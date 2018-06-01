java.util.*; 
java.util.streams.*; 

/*
Write a method to replace all spaces in a string 
with a given replacement string. 
replace("This is a test","/") --> "This/is/a/test"
Note: Avoid using the in-built String.replaceAll() method. 
*/

public static String replace(String a, String b) {
    String output = "";
    for( int i = 0; i < a.length(); i++){
        if(a.substring(i, (i+1)).equalsIgnoreCase(" ")){
            output += b;
        }else{
            output += a.substring(i, (i+1));
        }
    }
    return output;
}