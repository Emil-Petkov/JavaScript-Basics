function toyShop(input) {
    let tripPrice = Number(input[0]);
    let nPuzzles = Number(input[1]);
    let nDolls = Number(input[2]);
    let nTeddyBear = Number(input[3]);
    let nMinions = Number(input[4]);
    let nTrucks = Number(input[5]);

    let pricePuzzle = 2.60;
    let priceDoll = 3.00;
    let priceTeddyBear = 4.10;
    let priceMinion = 8.20;
    let priceTruck = 2.00;

    let totalToysCount = nPuzzles + nDolls + nTeddyBear + nMinions + nTrucks;

    let subtotal = (nPuzzles * pricePuzzle) + (nDolls * priceDoll) +
        (nTeddyBear * priceTeddyBear) + (nMinions * priceMinion) +
        (nTrucks * priceTruck);

    let total = subtotal;
    let rentTax = 0


    if (totalToysCount >= 50) {
        total -= total * 0.25;
    }

    rentTax = total * 0.10;

    let diff = Math.abs(tripPrice - (total - rentTax));

    if (total >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}

toyShop((["40.8", "20", "25", "30", "50", "10"]));