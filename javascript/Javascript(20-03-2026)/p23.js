/**
 * PROBLEM: Write a function to remove every vowel from a string.
 * 
 * INSTRUCTIONS:
 * Remove all vowels from the given string 'str' and return the new string.
 * Note: In the English alphabet, vowels are 'a', 'e', 'i', 'o', 'u',
 * including their uppercase forms.
 * 
 * EXAMPLE:
 * Input: str = "Orange juice"
 * Output: "rng jc"
 * Reason: Removing all vowels from "Orange juice" results in "rng jc".
 */

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("Orange juice")); 
console.log(removeVowels("Hello World"));  
console.log(removeVowels("AEIOU"));        
