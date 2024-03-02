function solve(input) {
    let pages = input[0];
    let readingPagesPerHour = input[1];
    let days = input[2];

    let totalHoursPerBook = pages / readingPagesPerHour;
    let neededHoursPerDay = totalHoursPerBook / days;

    console.log(neededHoursPerDay);
}

solve(["212", "20", "2"])