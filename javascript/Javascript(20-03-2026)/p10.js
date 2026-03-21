/**
 * PROBLEM: Write a function to count the number of parameters passed to it.
 * 
 * INSTRUCTIONS:
 * Return the number of parameters passed.
 * 
 * EXAMPLES:
 * 1. args = 6, 23, 69, 22, 9 -> Result: 5
 * 2. args = 'j', 'k'         -> Result: 2
 */


function countParameters(...args) {
    
    return args.length;
}


function countParametersClassic() {
    return arguments.length;
}
console.log(countParameters(6, 23, 69, 22, 9)); 
console.log(countParameters('j', 'k'));          
console.log(countParameters());                  
