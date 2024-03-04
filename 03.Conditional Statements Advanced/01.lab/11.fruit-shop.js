function fruitShop(input) {
    let product = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;

    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let weekends = ['Saturday', 'Sunday'];

    if (!weekdays.includes(dayOfWeek) && !weekends.includes(dayOfWeek)) {
        console.log('error');
        return;
    }

    if (weekdays.includes(dayOfWeek)) {
        if (product === 'banana') {
            totalPrice = quantity * 2.50;
        } else if (product === 'apple') {
            totalPrice = quantity * 1.20;
        } else if (product === 'orange') {
            totalPrice = quantity * 0.85;
        } else if (product === 'grapefruit') {
            totalPrice = quantity * 1.45;
        } else if (product === 'kiwi') {
            totalPrice = quantity * 2.70;
        } else if (product === 'pineapple') {
            totalPrice = quantity * 5.50;
        } else if (product === 'grapes') {
            totalPrice = quantity * 3.85;
        } else {
            console.log('error');
            return;
        }
    } else if (weekends.includes(dayOfWeek)) {
        if (product === 'banana') {
            totalPrice = quantity * 2.70;
        } else if (product === 'apple') {
            totalPrice = quantity * 1.25;
        } else if (product === 'orange') {
            totalPrice = quantity * 0.90;
        } else if (product === 'grapefruit') {
            totalPrice = quantity * 1.60;
        } else if (product === 'kiwi') {
            totalPrice = quantity * 3.00;
        } else if (product === 'pineapple') {
            totalPrice = quantity * 5.60;
        } else if (product === 'grapes') {
            totalPrice = quantity * 4.20;
        } else {
            console.log('error');
            return;
        }
    }

    console.log(totalPrice.toFixed(2));
}

fruitShop(["orange", "Sunday", "3"]);