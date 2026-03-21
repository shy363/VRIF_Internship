/* 
Question: Write a function to check if a year is a leap year.
- A leap year is divisible by 4.
- However, if the year is also divisible by 100, it must be divisible by 400 to be a leap year.
- Return "Leap" if it is a leap year, otherwise return "NoLeap".
*/

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap";
  }
  return "NoLeap";
}

// Example usage:
console.log(isLeapYear(2000)); // Output: "Leap"
console.log(isLeapYear(1900)); // Output: "NoLeap"
console.log(isLeapYear(1996)); // Output: "Leap"
