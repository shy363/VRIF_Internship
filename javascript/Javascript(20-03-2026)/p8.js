/**
 * PROBLEM: Write a function to check if a number is within a given range.
 * 
 * INSTRUCTIONS:
 * If the number 'num' is within the range of 'lowerLimit' (inclusive) and 
 * 'upperLimit' (inclusive), return "Yes". Otherwise, return "No".
 * 
 * EXAMPLE:
 * Input: num = 10, lowerLimit = 1, upperLimit = 10
 * Output: "Yes"
 * Reason: 10 is within the range of 1 and 10 (inclusive).
 */

function isInRange(num, lowerLimit, upperLimit) {

    if (num >= lowerLimit && num <= upperLimit) {
        return "Yes";
    } else {
        return "No";
    }
}


console.log(isInRange(10, 1, 10));  
console.log(isInRange(5, 1, 10));   
console.log(isInRange(11, 1, 10));  
console.log(isInRange(0, 1, 10));  
