/**
 * PROBLEM: Write a function to find the index of an element in an array.
 * 
 * INSTRUCTIONS:
 * Return the index of 'element' in array 'arr' if it is found, 
 * otherwise return -1.
 * 
 * EXAMPLES:
 * 1. arr = [2, 4, 6, 8, 10], element = 6 -> Result: 2
 *    Reason: 6 is at index 2 in the array [2, 4, 6, 8, 10].
 * 
 * 2. arr = [2, 4, 6, 8, 10], element = 3 -> Result: -1
 *    Reason: 3 is not present in the array [2, 4, 6, 8, 10].
 */

function findIndex(arr, element) {
  
    return arr.indexOf(element);
}

function findIndexManual(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; 
        }
    }
    return -1; 
}

const myArray = [2, 4, 6, 8, 10];

console.log(findIndex(myArray, 6)); 
console.log(findIndex(myArray, 3)); 
