//pass non-global data variable

function Method1() {
    var price = 0.00;
    var salesAmount = 555555555;
    Method2(price, salesAmount);
}

function Method2(price, salesAmount) {
    if (price < 50) {
        //cry
    } else if (price >= 50) {
        //rejoice
    }

}
