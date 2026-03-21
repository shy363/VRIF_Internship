/**
 * PROBLEM: Write a function to check if two sublists are identical.
 * 
 * INSTRUCTIONS:
 * Two subsets are said to be identical if they have the same elements 
 * in the same order. 
 * 
 * If the two sublists list1 and list2 are identical, return "Identical".
 * Otherwise, return "Not Identical".
 * 
 * EXAMPLES:
 * 1. [2, 5] and [2, 5] -> "Identical"
 * 2. [3, 1] and [1, 3] -> "Not Identical"
 * 
 * INPUT: list1 = [1, 2, 3], list2 = [1, 2, 3]
 * OUTPUT: "Identical"
 */

function areListsIdentical(list1, list2) {
   
    if (list1.length !== list2.length) {
        return "Not Identical";
    }

    for (let i = 0; i < list1.length; i++) {
       
        if (list1[i] !== list2[i]) {
            return "Not Identical";
        }
    }

    return "Identical";
}

console.log(areListsIdentical([1, 2, 3], [1, 2, 3])); 
console.log(areListsIdentical([3, 1], [1, 3]));       
console.log(areListsIdentical([2, 5], [2, 5, 6]));   
