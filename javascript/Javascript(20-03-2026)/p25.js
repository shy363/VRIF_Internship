/**
 * PROBLEM: Write a function to check if the characters in a string 
 * are in alphabetical order.
 * 
 * INSTRUCTIONS:
 * If the characters in the string 'str' are in alphabetical order, 
 * return "Ordered". Otherwise, return "Unordered".
 * 
 * EXAMPLE:
 * Input: str = "abcde"
 * Output: "Ordered"
 * Reason: The string "abcde" has characters that are arranged 
 * alphabetically. So, it's in order.
 */

function checkAlphabeticalOrder(str) {
    for (let i = 0; i < str.length - 1; i++) {

        if (str[i] > str[i + 1]) {
            return "Unordered";
        }
    }

    return "Ordered";
}

console.log(checkAlphabeticalOrder("abcde")); 
console.log(checkAlphabeticalOrder("apple")); 
console.log(checkAlphabeticalOrder("aabbcc")); 