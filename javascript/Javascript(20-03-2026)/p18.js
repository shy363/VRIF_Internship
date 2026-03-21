/**
 * PROBLEM: Write a function to calculate the sum of all digits in a number.
 * 
 * INSTRUCTIONS:
 * Return the sum of all digits in the integer 'num'.
 * 
 * EXAMPLE:
 * Input: num = 12345
 * Output: 15
 * Reason: The sum of all digits of 12345 is 1+2+3+4+5 = 15.
 */

function sumDigits(num) {
    
    let numStr = Math.abs(num).toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
       
        sum += parseInt(numStr[i]);
    }

    return sum;
}

console.log(sumDigits(12345)); 
console.log(sumDigits(432));   
console.log(sumDigits(0));     