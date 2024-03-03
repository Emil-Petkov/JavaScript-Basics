function sumSeconds(input) {
    let firstResultInSeconds = Number(input[0]);
    let secondResultInSeconds = Number(input[1]);
    let thirdResultInSeconds = Number(input[2]);

    let totalSeconds = firstResultInSeconds + secondResultInSeconds + thirdResultInSeconds;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds((["35", "45", "44"]))