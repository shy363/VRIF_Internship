/**
 * PROBLEM: Write a function to calculate the mean of all digits in a number.
 * 
 * INSTRUCTIONS:
 * In mathematics, the mean is the average of all numbers in a set.
 * Given a number, return the mean of all digits in it.
 * 
 * EXAMPLE:
 * Input: num = 12345
 * Output: 3
 * Reason: The mean of 12345 is (1 + 2 + 3 + 4 + 5) / 5, which equals 3.
 */

function calculateMeanOfDigits(num) {
    const numStr = Math.abs(num).toString();
    const digits = numStr.split('');
    
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]);
    }
    
    return sum / digits.length;
}

console.log(calculateMeanOfDigits(12345)); 
console.log(calculateMeanOfDigits(666));   
console.log(calculateMeanOfDigits(10));    
