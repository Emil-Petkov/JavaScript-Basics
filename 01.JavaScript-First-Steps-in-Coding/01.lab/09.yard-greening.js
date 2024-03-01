function greening(input) {
    let squareMeters = input[0];

    let totalPrice = squareMeters * 7.61; //price per square meter
    let discount = totalPrice * 0.18;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

greening(["550"]);