function solve(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let restDuration = Number(input[2]);

    let lunchTime = restDuration / 8;
    let restTime = restDuration / 4;

    let totalFreeTime = restDuration - lunchTime - restTime;

    let diff = Math.abs(Math.floor(totalFreeTime - episodeDuration));

    if (totalFreeTime >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${diff} more minutes.`);
    }
}

solve((["Game of Thrones", "60", "96"]));