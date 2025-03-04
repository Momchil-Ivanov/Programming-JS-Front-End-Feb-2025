function calculateBitcoins(minedGoldPerDaysArray) {
    let bitcoins = 0;
    let moneyInBgn = 0;
    let dayCounter = 0;
    let firstDay = 0;

    for (let i = 0; i < minedGoldPerDaysArray.length; i++) {
        dayCounter++;
        let gold = minedGoldPerDaysArray[i];

        if (dayCounter % 3 === 0) {
            gold *= 0.7;
        }

        moneyInBgn += gold * 67.51;

        while (moneyInBgn >= 11949.16) {
            bitcoins++;
            moneyInBgn -= 11949.16;

            if (firstDay === 0) {
                firstDay = dayCounter;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneyInBgn.toFixed(2)} lv.`);
}

// calculateBitcoins([100, 200, 300]);
// calculateBitcoins([50, 100]);
// calculateBitcoins([3124.15, 504.212, 2511.124]);
