function removeVowels(str) {
 
  return str.replace(/[aeiou]/gi, "");
}

const result = removeVowels("Orange juice");
console.log(result); 