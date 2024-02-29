function solve(input) {
    let name = input[0];
    let projects = input[1];

    let calculatedHours = projects * 3 //hours

    console.log(`The architect ${name} will need ${calculatedHours} hours to complete ${projects} project/s.`);
}

solve(["George",
    "4"])