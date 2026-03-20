function makeSumEven(num1, num2) {

    let sum = num1 + num2;

   
    if (sum % 2 !== 0) {
        sum = sum + 1;
    }

    return sum;
}


console.log(makeSumEven(4, 3)); // Output: 8
