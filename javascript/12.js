function checkDisarium(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        // We raise each digit to the power of its position (i + 1)
        sum += Math.pow(parseInt(numStr[i]), i + 1);
    }

    return sum === num ? "Disarium" : "Not Disarium";
}

// To call the function, simply use the name and the value:
console.log(checkDisarium(175)); // Output: "Disarium"