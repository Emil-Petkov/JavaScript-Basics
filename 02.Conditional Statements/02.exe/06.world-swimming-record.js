function worldRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeterInSeconds = Number(input[2]);

    let timePerAllDistance = distanceInMeters * timePerMeterInSeconds;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = timePerAllDistance + delay;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(totalTime - recordInSeconds);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldRecord((["55555.67",
    "3017",
    "5.03"]));