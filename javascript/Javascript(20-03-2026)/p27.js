/**
 * Question: Write a function to calculate the power of a number.
 * 
 * Instructions:
 * Return the result of 'base' by raising it to 'exponent' for the 
 * given 'base' and 'exponent'.
 * 
 * Example:
 * base = 2, exponent = 3 -> result should be 8
 * (Reason: 2 * 2 * 2 = 8)
 */

function calculatePower(base, exponent) {
 
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 2)); 
