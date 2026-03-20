function findInterval(arr) {
    return Math.max(...arr) - Math.min(...arr);
}

console.log(findInterval([5, 2, 9, 1]));