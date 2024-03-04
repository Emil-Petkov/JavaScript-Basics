function solve(input) {
    let dayOfWeek = input[0];

    let currentDay = '';

    switch (dayOfWeek) {
        case 'Monday':
            currentDay = 'Working day';
            break;

        case 'Tuesday':
            currentDay = 'Working day';
            break;

        case 'Wednesday':
            currentDay = 'Working day';
            break;

        case 'Thursday':
            currentDay = 'Working day';
            break;

        case 'Friday':
            currentDay = 'Working day';
            break;

        case 'Saturday':
            currentDay = 'Weekend';
            break;

        case 'Sunday':
            currentDay = 'Weekend';
            break;

        default:
            currentDay = 'Error';
            break;
    }

    console.log(currentDay);
}

solve((["abc"]));