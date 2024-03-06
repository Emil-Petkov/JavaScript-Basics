




















function solve(input) {
    let city = input[0];
    let sales = Number(input[1]);

    if (sales < 0) {
        console.log('error');
        return;
    }

    let commission = 0;
    switch (city) {
        case 'Sofia':
            if (sales <= 500) {
                commission = 0.05;
            } else if (sales <= 1000) {
                commission = 0.07;
            } else if (sales <= 10000) {
                commission = 0.08;
            } else {
                commission = 0.12;
            }
            break;
        case 'Varna':
            if (sales <= 500) {
                commission = 0.045;
            } else if (sales <= 1000) {
                commission = 0.075;
            } else if (sales <= 10000) {
                commission = 0.10;
            } else {
                commission = 0.13;
            }
            break;
        case 'Plovdiv':
            if (sales <= 500) {
                commission = 0.055;
            } else if (sales <= 1000) {
                commission = 0.08;
            } else if (sales <= 10000) {
                commission = 0.12;
            } else {
                commission = 0.145;
            }
            break;
        default:
            console.log('error');
            return;
    }

    let total = sales * commission;
    console.log(total.toFixed(2));
}


solve(["Sofia", "1500"]);
