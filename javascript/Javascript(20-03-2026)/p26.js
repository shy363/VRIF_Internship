/**
 * Instructions:
 * Repeat all the vowels in the string 'str' and return the updated string.
 * 
 * Note: In the English alphabet, vowels are 'a', 'e', 'i', 'o', 'u', 
 * including their uppercase forms.
 * 
 * Example: "Hello Aaron" -> "Heelloo AAaaroon"
 */

 function repeatVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      result += char + char; 
    } else {
      result += char; 
    }
  }
  return result;
}