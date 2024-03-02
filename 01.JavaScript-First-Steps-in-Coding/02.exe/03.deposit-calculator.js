function depositCalculator(input) {
    let deposit = Number(input[0]);
    let month = Number(input[1]);
    let interest = Number(input[2]);

    let totalInterest = deposit * (interest / 100);
    let monthlyInterest = totalInterest / 12;

    let result = deposit + (month * monthlyInterest);

    console.log(result);
}

depositCalculator(["200 ", "3 ", "5.7 "])