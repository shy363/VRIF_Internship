/**
 * PROBLEM: Write a function to check if a string contains spaces.
 * 
 * INSTRUCTIONS:
 * If the string 'str' contains space, return "Space". 
 * Otherwise, return "No Space".
 * 
 * EXAMPLE:
 * Input: str = "Hello World"
 * Output: "Space"
 * Reason: There is a space between "Hello" and "World".
 */

function checkSpaces(str) {
 
  if (str.includes(" ")) {
    return "Space";
  } else {
    return "No Space";
  }
}


console.log(checkSpaces("Hello World")); 
console.log(checkSpaces("HelloWorld"));  
console.log(checkSpaces("   "));        
