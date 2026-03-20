function calculateAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calculateAverage([4, 6, 8, 10]));