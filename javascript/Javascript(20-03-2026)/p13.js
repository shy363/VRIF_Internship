/**
 * PROBLEM: Write a function to find the interval of an array.
 * 
 * INSTRUCTIONS:
 * Interval is the difference between the largest number and the 
 * smallest number in an array.
 * 
 * EXAMPLES:
 * 1. arr = [10, 5, 15] -> 15 - 5 = 10
 * 2. arr = [5, 2, 9, 1] -> 9 - 1 = 8
 * 3. arr = [7] -> 7 - 7 = 0
 */

function findInterval(arr) {
    
    if (arr.length === 0) return 0;
    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);
    return maxVal - minVal;
}


console.log(findInterval([5, 2, 9, 1])); 
console.log(findInterval([10, 5, 15])); 
console.log(findInterval([7]));         
