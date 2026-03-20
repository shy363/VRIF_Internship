function calculateSumOfDigits(num) {
   
    return num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}


const num = 12345;
const result = calculateSumOfDigits(num);

console.log("Input Number:", num);
console.log("Sum of Digits:", result); 


