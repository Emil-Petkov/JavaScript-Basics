function shoping(input) {
    let budget = Number(input[0]);
    let nVideoCards = Number(input[1]);
    let nProcessors = Number(input[2]);
    let nRamMemory = Number(input[3]);



    let priceVideoCard = nVideoCards * 250.00;
    let priceProcessor = priceVideoCard * 0.35;
    let priceRamMemory = priceVideoCard * 0.10;

    let totalPrice = priceVideoCard +
        (nProcessors * priceProcessor) +
        (nRamMemory * priceRamMemory);


    if (nVideoCards > nProcessors) {
        totalPrice -= totalPrice * 0.15;
    }

    let diff = Math.abs(totalPrice - budget);

    if (budget >= totalPrice) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shoping((["900", "2", "1", "3"]))