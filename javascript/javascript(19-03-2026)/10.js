function checkInRange(num, lowerLimit, upperLimit) {
    return (num >= lowerLimit && num <= upperLimit) ? "Yes" : "No";
}

console.log(checkInRange(10, 1, 10)); // "Yes"