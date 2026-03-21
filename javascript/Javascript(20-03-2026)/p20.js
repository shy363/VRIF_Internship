/**
 * PROBLEM: Write a function to find the longest consecutive zeros 
 * in a binary string.
 * 
 * INSTRUCTIONS:
 * Return the length of the longest sequence of consecutive zeros 
 * in the binary string 'str'.
 * 
 * EXAMPLE:
 * Input: str = "1010010001"
 * Output: 3
 * Reason: The sequences of zeros are "0", "00", and "000". 
 * The longest is "000", which has a length of 3.
 */

function longestConsecutiveZeros(str) {
    const zeroGroups = str.split('1');
    const lengths = zeroGroups.map(group => group.length);
    return Math.max(...lengths);
}


console.log(longestConsecutiveZeros("1010010001")); 
console.log(longestConsecutiveZeros("11111"));      
console.log(longestConsecutiveZeros("0001100"));    
