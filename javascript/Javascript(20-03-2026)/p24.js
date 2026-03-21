/**
 * PROBLEM: Write a function to remove special characters from a string.
 * 
 * INSTRUCTIONS:
 * A special character is any character that is not a whitespace (" "), 
 * letter (a-z and A-Z) or digit (0-9).
 * 
 * Remove all the special characters from an input string 'str' and 
 * return the updated string.
 * 
 * EXAMPLE:
 * Input: str = "He!llO@ Wo#rld$%^&*()"
 * Output: "Hello World"
 * Reason: Removing special characters from "He!llO@ Wo#rld$%^&*()" 
 * results in "Hello World".
 */

function removeSpecialCharacters(str) {
   
    return str.replace(/[^a-zA-Z0-9\s]/g, "");
}


const input = "He!llO@ Wo#rld$%^&*()";
console.log(removeSpecialCharacters(input)); 

console.log(removeSpecialCharacters("JS_is_Awesome123!")); 