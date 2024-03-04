function workingHours(input) {
    let currentHour = Number(input[0]);
    let currentDay = input[1];

    let workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekendDays = ['Saturday', 'Sunday'];

    if (workingDays.includes(currentDay)) {
        if (currentHour >= 10 && currentHour <= 18) {
            console.log('open');
        } else {
            console.log('closed');
        }
    } else if (weekendDays.includes(currentDay)) {
        console.log('closed');
    }
}

workingHours(["11", "Sunday"]);