function calculateProfitLoss(sellingPrice, costPrice) {
    let result = sellingPrice - costPrice;

    if (result > 0) {
        return "Profit";
    } else if (result < 0) {
        return "Loss";
    } else {
        return "Break-even";
    }
}

console.log(calculateProfitLoss(50, 30));