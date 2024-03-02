function solve(input) {
    let figure = input[0];
    let result = 0

    if (figure == 'square') {
        let side = input[1];
        let area = side * side;

        result = area

    } else if (figure == 'rectangle') {
        let sideA = input[1];
        let sideB = input[2];
        let area = sideA * sideB

        result = area

    } else if (figure == 'circle') {
        let radius = input[1];
        let area = radius * radius * Math.PI;

        result = area

    } else if (figure == 'triangle') {
        let side = input[1];
        let height = input[2];
        let area = (side * height) / 2;

        result = area
    }

    console.log(result.toFixed(3));

}

solve((["rectangle", "7", "2.5"]))