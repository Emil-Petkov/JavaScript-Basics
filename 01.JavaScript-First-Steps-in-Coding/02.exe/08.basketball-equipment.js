function solve(input) {
    let tax = Number(input[0]);
    let shoes = tax - (tax * 0.40);
    let sportEquipment = shoes - (shoes * 0.20);
    let ball = sportEquipment / 4;
    let accessories = ball / 5;

    let calculate = tax + shoes + sportEquipment + ball + accessories;

    console.log(calculate);
}

solve(["365 "])