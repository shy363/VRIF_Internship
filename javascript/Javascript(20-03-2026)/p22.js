/**
 * PROBLEM: Write a function to count the number of digits in a number.
 * 
 * INSTRUCTIONS:
 * Return the count of digits in the integer 'num'.
 * 
 * EXAMPLE:
 * Input: num = 287
 * Output: 3
 * Reason: 287 has 3 digits.
 */

function countDigits(num) {
    
    return Math.abs(num).toString().length;
}

console.log(countDigits(287));   
console.log(countDigits(-50));   
console.log(countDigits(0));     
