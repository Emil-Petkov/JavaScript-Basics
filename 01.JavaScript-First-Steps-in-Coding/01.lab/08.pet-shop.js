function petShop(input) {
    let packDogFood = input[0];
    let packCatFood = input[1];

    let bill = (packDogFood * 2.50) + (packCatFood * 4.00);

    console.log(`${bill} lv.`);
}

petShop(["5 ",
    "4 "])