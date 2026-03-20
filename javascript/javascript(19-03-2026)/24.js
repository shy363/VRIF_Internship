function largestSwap(num) {
  const strNum = num.toString();
  
  const swappedStr = strNum.split('').reverse().join('');
  
  
  const swappedNum = Number(swappedStr);
  
  return num >= swappedNum;
}


console.log("Is 27 the largest swap?", largestSwap(27)); // Expected: false (72 is bigger)
