function findMaxDigit(num) {
 
  const digits = num.toString().split('');
  
  
  
  return Math.max(...digits);
}


const num = 39482;
const result = findMaxDigit(num);

console.log("The highest digit in " + num + " is: " + result);