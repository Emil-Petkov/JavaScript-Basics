function solve(input) {
    let budget = Number(input[0]);
    let nStatists = Number(input[1]);
    let clothesPerStatistPrice = Number(input[2]);

    let decor = budget * 0.10;
    let moneyPerClothes = nStatists * clothesPerStatistPrice;

    if (nStatists > 150) {
        moneyPerClothes -= moneyPerClothes * 0.10;
    }

    let total = decor + moneyPerClothes

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }

}

solve((["20000", "120", "55.5"]));