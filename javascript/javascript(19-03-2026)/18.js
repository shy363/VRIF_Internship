function calculateMean(num) {
   
    
    const digits = Math.abs(num).toString().split('');
    
   
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    
    
    const mean = sum / digits.length;
    
    return mean;
}


const num = 12345;
console.log("The mean of digits in", num, "is:", calculateMean(num));