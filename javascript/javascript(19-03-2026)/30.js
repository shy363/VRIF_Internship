function isStringInOrder(str) {
    let sortedStr = str.split('').sort().join('');

    if (str === sortedStr) {
        return "Ordered";
    } else {
        return "Unordered";
    }
}


console.log(isStringInOrder("abcde")); 

