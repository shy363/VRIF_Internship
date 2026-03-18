/**
 * Checks if a student has passed based on their marks.
 * Threshold: 40 and above is "Pass", otherwise "Fail".
 */
function checkResult(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// --- Testing the function ---
console.log("Score 10:", checkResult(10)); // Output: "Fail"
console.log("Score 40:", checkResult(40)); // Output: "Pass"
console.log("Score 85:", checkResult(85)); // Output: "Pass"