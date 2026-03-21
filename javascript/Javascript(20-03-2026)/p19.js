/**
 * PROBLEM: Write a function to find the highest digit in a number.
 * 
 * INSTRUCTIONS:
 * Return the highest digit in the given integer 'num'.
 * 
 * EXAMPLE:
 * Input: num = 39482
 * Output: 9
 * Reason: The highest digit in 39482 is 9.
 */

function findHighestDigit(num) {
    
    let numStr = Math.abs(num).toString();
    
    let digitsArray = numStr.split('');
    
    return Math.max(...digitsArray);
}

console.log(findHighestDigit(39482)); 
console.log(findHighestDigit(102));   
console.log(findHighestDigit(777));
