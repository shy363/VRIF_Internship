/* 
Question: Write a function to find the total number of fruits in the salad.
- In the given fruits array, each element represents the number of fruits of a particular type.
- Return the total number of fruits in the array fruits.
- Example: For [3, 2, 5, 1], the result is 11.
*/

function totalFruits(fruits) {
  let total = 0;

  for (let i = 0; i < fruits.length; i++) {
    total += fruits[i];
  }

  return total;
}

// Example usage:
console.log(totalFruits([3, 2, 5, 1])); // Output: 11
