function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintТhinner = Number(input[2]);
    let hours = Number(input[3]);

    let extraNylon = 2;
    let extraPaint = paint * 0.10;
    let garbageBags = 0.40

    let pricePerMaterials = ((nylon + extraNylon) * 1.50) + ((paint + extraPaint) * 14.50) +
        (paintТhinner * 5.00) + garbageBags;

    let moneyPerMasterForHour = (pricePerMaterials * 0.30) * hours;

    let total = pricePerMaterials + moneyPerMasterForHour;

    console.log(total);

}

repainting(["10", "11", "4", "8"])