function calculateCarriageCapacity(carriageArea, personArea) {
    return Math.floor(carriageArea / personArea);
}

console.log(calculateCarriageCapacity(100, 5));