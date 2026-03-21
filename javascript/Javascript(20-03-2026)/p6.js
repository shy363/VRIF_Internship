/**
 * Write a function to check if a string contains spaces.
 * 
 * Instructions:
 * If the string 'str' contains space, return "Space". 
 * Otherwise, return "No Space".
 * 
 * Example:
 * str = "Hello World" -> "Space"
 */

function hasSpace(str) {
    
    if (str.includes(" ")) {
        return "Space";
    } else {
        return "No Space";
    }
}

console.log(hasSpace("Hello World")); 
console.log(hasSpace("HelloWorld"));  
console.log(hasSpace(" "));        
