/**
 * Write a function to calculate the power of a number.
 * The power of a number is calculated by multiplying the base with itself for exponent times.
 * 
 * Example: base = 2, exponent = 3 -> result = 8
 */

function calculatePower(base, exponent) {
    return base ** exponent;
}

function calculatePowerWithLoop(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(calculatePower(2, 3)); 
console.log(calculatePower(2, 4)); 
