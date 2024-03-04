function solve(input) {
    let currentAnimal = input[0];

    let mammal = ['dog',];
    let reptile = ['crocodile', 'snake', 'tortoise',];

    if (mammal.includes(currentAnimal)) {
        console.log('mammal');
    } else if (reptile.includes(currentAnimal)) {
        console.log('reptile');
    } else {
        console.log('unknown');
    }
}

solve((["dog"]));