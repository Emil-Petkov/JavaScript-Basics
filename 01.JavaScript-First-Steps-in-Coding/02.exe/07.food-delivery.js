function solve(input) {
    let nChickenMenue = input[0];
    let nFishMenue = input[1];
    let nVeganMenue = input[2];
    const delivery = 2.50;

    let subtotal = (nChickenMenue * 10.35) + (nFishMenue * 12.40) +
        (nVeganMenue * 8.15);

    let desert = subtotal * 0.20;

    let total = subtotal + desert + delivery;

    console.log(total);
}

solve(["2", "4", "3"])