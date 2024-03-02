function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let areaInCm3 = length * width * height;
    let areaInLiters = areaInCm3 / 1000;

    let neededLiters = areaInLiters * (1 - ((percentage) / 100));

    console.log(neededLiters);

}

solve(["85", "75", "47", "17"])