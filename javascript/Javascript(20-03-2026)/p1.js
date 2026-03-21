/* 
Question: Write a function to return the first N vowels from a string.
- Return the first N vowels from the given string str.
- Vowels include 'a', 'e', 'i', 'o', 'u' and their uppercase forms.
- If n is greater than the total number of vowels, return all vowels found.
*/

function firstNVowels(str, n) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      result += char;
    }
    if (result.length === n) {
      return result;
    }
  }

  return result;
}

console.log(firstNVowels("Ice and water", 3)); // Output: "Iea"
console.log(firstNVowels("Ice and water", 8)); // Output: "Ieaae"
