function invalidNumbers(input) {
    let number = Number(input[0]);

    if (number === 0 || (number >= 100 && number <= 200)) {
        return;

    } else {
        console.log('invalid');
    }
}

invalidNumbers(["150"]);