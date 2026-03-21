/**
 * PROBLEM: Write a function to make the sum of two numbers even.
 * 
 * INSTRUCTIONS:
 * Return the sum of num1 and num2. If the sum is not even, add 1 to it.
 * 
 * EXAMPLE:
 * Input: num1 = 4, num2 = 3
 * Sum: 4 + 3 = 7
 * Result: 8
 * Reason: The sum of 4 and 3 is 7, which is not even. 
 * Adding 1 makes it even, so the result is 8.
 */

function makeSumEven(num1, num2) {
    let sum = num1 + num2;

    if (sum % 2 !== 0) {
        return sum + 1;
    } else {
    
        return sum;
    }
}


console.log(makeSumEven(4, 3));  
console.log(makeSumEven(2, 2));  
console.log(makeSumEven(10, 5)); 