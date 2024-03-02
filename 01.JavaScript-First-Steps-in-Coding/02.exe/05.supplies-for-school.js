function solve(input) {
    let nPackagesPens = input[0];
    let nPackagesMarkers = input[1];
    let litersChalkboardCleaner = input[2];
    let percentageDiscount = input[3];

    const priceOnePackagePens = 5.80;
    const priceOnePackageMarkers = 7.20;
    const priceOneLiterChalkboardCleaner = 1.20;


    let bill = (nPackagesPens * priceOnePackagePens) +
        (nPackagesMarkers * priceOnePackageMarkers) +
        (litersChalkboardCleaner * priceOneLiterChalkboardCleaner);

    let totalPrice = bill - (bill * (percentageDiscount / 100));

    console.log(totalPrice);

}

solve(["2", "3", "4", "25"])