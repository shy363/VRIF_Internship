/*
  QUESTION:
  Write a function to calculate the hypotenuse of a right triangle.

  INSTRUCTIONS:
  The formula to calculate the hypotenuse of a right triangle with sides a and b is:
  hypotenuse = √(a² + b²)

  Given sides a and b, return the hypotenuse of the right triangle.

  EXAMPLE:
  Input: a = 3, b = 4
  Result: 5 
  Reason: √(3² + 4²) = √(9 + 16) = √25 = 5
*/

function calculateHypotenuse(a, b) {

  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(calculateHypotenuse(3, 4)); 
