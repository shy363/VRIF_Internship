function findFirstAndLast(arr, num) {
   
    const firstIndex = arr.indexOf(num);
    
   
    const lastIndex = arr.lastIndexOf(num);
    
   
    return [firstIndex, lastIndex];
}


const arr1 = [10, 20, 30, 20, 25, 20, 33];
const target1 = 20;
console.log(`Input: ${arr1}, target: ${target1}`);
console.log("Output:", findFirstAndLast(arr1, target1)); 

const arr2 = [10, 20, 30, 20, 25, 20, 33];
const target2 = 30;
console.log(`Input: ${arr2}, target: ${target2}`);
console.log("Output:", findFirstAndLast(arr2, target2));