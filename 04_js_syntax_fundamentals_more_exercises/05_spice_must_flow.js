function calculateYield(startingYield) {
    let totalYield = 0;
    let days = 0;

    if (startingYield < 100) {
        return `0\n0`;
    }

    while (startingYield >= 100) {
        totalYield += startingYield - 26;
        startingYield -= 10;
        days++;
    }

    totalYield -= 26;

    return `${days}\n${totalYield}`;
}

// console.log(calculateYield(111));
// console.log(calculateYield(450));
// console.log(calculateYield(0));
// console.log(calculateYield(99));
