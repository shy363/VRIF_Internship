/*
  QUESTION:
  Calculate the profit or loss amount and return a status string.

  INSTRUCTIONS:
  The profit or loss amount is calculated by: 
  Profit/Loss = selling price - cost price

  Return:
  1. "Profit" if the result is positive.
  2. "Loss" if the result is negative.
  3. "Break-even" if the result is zero.

  EXAMPLES:
  - sellingPrice: 50, costPrice: 30 -> Result: "Profit"
  - sellingPrice: 100, costPrice: 150 -> Result: "Loss"
*/

function getProfitStatus(sellingPrice, costPrice) {
    const result = sellingPrice - costPrice;

    if (result > 0) {
        return "Profit";
    } else if (result < 0) {
        return "Loss";
    } else {
        return "Break-even";
    }
}


console.log(getProfitStatus(50, 30));   
console.log(getProfitStatus(100, 150)); 
console.log(getProfitStatus(100, 100));
