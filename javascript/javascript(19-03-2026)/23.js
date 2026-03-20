function findLargest(num) {
    
    let digits = num.toString().split('');
    let n = digits.length;

    
    for (let i = 0; i < n; i++) {
        let maxIdx = i;

       
        for (let j = n - 1; j > i; j--) {
            if (digits[j] > digits[maxIdx]) {
                maxIdx = j;
            }
        }

        
        if (maxIdx !== i) {
            let temp = digits[i];
            digits[i] = digits[maxIdx];
            digits[maxIdx] = temp;
            
            // Join back to string, convert to number and return immediately
            return parseInt(digits.join(''));
        }
    }

    
    return num;
}


const inputNum = 2736;
const result = findLargest(inputNum);


console.log("Largest after one swap:", result);