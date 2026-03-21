/**
 * PROBLEM: Write a function to check if a string is empty.
 * 
 * INSTRUCTIONS:
 * If the string 'str' is empty, return "Empty". 
 * Otherwise, return "Not Empty".
 * 
 * NOTE: A string with only spaces (e.g., "  ") is still considered non-empty.
 * 
 * EXAMPLES:
 * 1. str = "Hello World!" -> "Not Empty"
 * 2. str = " "            -> "Not Empty" (contains a space)
 * 3. str = ""             -> "Empty"
 */

function checkIfEmpty(str) {

    if (str.length === 0) {
        return "Empty";
    } else {
        return "Not Empty";
    }
}

console.log(checkIfEmpty(""));              
console.log(checkIfEmpty("Hello World!"));  
console.log(checkIfEmpty(" "));            