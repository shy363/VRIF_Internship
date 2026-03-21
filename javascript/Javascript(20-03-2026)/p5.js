/**
 * Write a function to check if an array is sorted.
 * 
 * Instructions:
 * If the array arr is sorted in ascending order, return "Sorted". 
 * Otherwise, return "Not Sorted".
 * 
 * Example: [10, 20, 30, 40] -> "Sorted"
 */

function checkIfSorted(arr) {
    
    for (let i = 0; i < arr.length - 1; i++) {
    
        if (arr[i] > arr[i + 1]) {
            return "Not Sorted";
        }
    }

    return "Sorted";
}

console.log(checkIfSorted([10, 20, 30, 40])); 
console.log(checkIfSorted([10, 30, 20, 40])); 