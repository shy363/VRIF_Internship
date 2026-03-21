/**
 * PROBLEM: Write a function to calculate HCF of two numbers.
 * 
 * INSTRUCTIONS:
 * HCF (Highest Common Factor) is the largest number that divides two
 * numbers without leaving a remainder.
 * 
 * EXAMPLE:
 * For the numbers 12 and 18:
 * Factors of 12: 1, 2, 3, 4, 6, 12
 * Factors of 18: 1, 2, 3, 6, 9, 18
 * Common factors: 1, 2, 3, 6
 * The largest common factor is 6. Therefore, the HCF of 12 and 18 is 6.
 * 
 * INPUT: num1 = 40, num2 = 8
 * OUTPUT: 8
 */

function calculateHCF(num1, num2) {
   
    while (num2 !== 0) {
        let remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }
    return num1;
}

console.log(calculateHCF(12, 18)); 
console.log(calculateHCF(40, 8));  
console.log(calculateHCF(15, 25)); 