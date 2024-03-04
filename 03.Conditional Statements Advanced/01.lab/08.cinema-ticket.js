function cinemaTicket(input) {
    let dayOfWeek = input[0]

    let total = 0;

    let twelveDollars = ['Monday', 'Tuesday', 'Friday',];
    let forteenDollars = ['Wednesday', 'Thursday',];
    let sixteenDollars = ['Saturday', 'Sunday',];

    if (twelveDollars.includes(dayOfWeek)) {
        total = 12;

    } else if (forteenDollars.includes(dayOfWeek)) {
        total = 14;

    } else if (sixteenDollars.includes(dayOfWeek)) {
        total = 16;
    }

    console.log(total);
}

cinemaTicket(["Sunday"]);