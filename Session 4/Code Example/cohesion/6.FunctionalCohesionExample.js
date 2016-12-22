//All the statements in a method contribute to one specific task

function Method() {
    var costPrice = 0.00;
    var sellingPrice;

    if (costPrice < 50) {
        sellingPrice = costPrice;
    } else if (costPrice > 60 && costPrice < 550) {
        sellingPrice = costPrice * 100;
    } else {
        sellingPrice = 0;
    }

    //all calculations are done on sellingPrice
    return sellingPrice;
}
