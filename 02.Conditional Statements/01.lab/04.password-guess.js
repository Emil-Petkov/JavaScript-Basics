function solve(input) {
    let correctPassword = 's3cr3t!P@ssw0rd'
    let guess = input[0];

    if (guess !== correctPassword) {
        console.log('Wrong password!');
    } else {
        console.log('Welcome');
    }
}

solve((["s3cr3t!p@ss"]))