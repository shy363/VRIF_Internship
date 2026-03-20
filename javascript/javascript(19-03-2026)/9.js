function checkSpaceInString(str) {
    if (str.includes(" ")) {
        return "Space";
    } else {
        return "No Space";
    }
}

console.log(checkSpaceInString("Hello World"));