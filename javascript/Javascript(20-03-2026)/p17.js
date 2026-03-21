/**
 * PROBLEM: Find the largest number that can be formed by swapping 
 * two digits of a given number.
 * 
 * INSTRUCTIONS:
 * Return the largest possible number by swapping exactly two digits 
 * in the given int 'num'.
 * 
 * EXAMPLE:
 * Input: num = 2736
 * Output: 7236
 * Reason: Swapping 2 and 7 results in 7236, which is the largest 
 * possible number formed by one swap.
 */

function maximumSwap(num) {
   
    let digits = num.toString().split('');
    
    let lastSeen = {};
    for (let i = 0; i < digits.length; i++) {
        lastSeen[digits[i]] = i;
    }

    for (let i = 0; i < digits.length; i++) {
        for (let d = 9; d > digits[i]; d--) {
            if (lastSeen[d] > i) {
                let temp = digits[i];
                digits[i] = digits[lastSeen[d]];
                digits[lastSeen[d]] = temp;
                return parseInt(digits.join(''));
            }
        }
    }

    return num;
}


console.log(maximumSwap(2736));  
console.log(maximumSwap(39452)); 
console.log(maximumSwap(9973));  
