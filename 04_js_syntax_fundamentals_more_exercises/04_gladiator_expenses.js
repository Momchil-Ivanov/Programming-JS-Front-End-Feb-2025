function calculateGladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    brokenHelmetCount = 0;
    brokenSwordCount = 0;
    brokenShieldCount = 0;
    brokenArmorCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            brokenHelmetCount++;
        }
        if (i % 3 === 0) {
            brokenSwordCount++;
        }
        if (i % 6 === 0) {
            brokenShieldCount++;
        }
        if (i % 12 === 0) {
            brokenArmorCount++;
        }
    }

    const expenses = (brokenHelmetCount * helmetPrice) + (brokenSwordCount * swordPrice)
        + (brokenShieldCount * shieldPrice) + (brokenArmorCount * armorPrice);

    return `Gladiator expenses: ${expenses.toFixed(2)} aureus`;
}

// console.log(calculateGladiatorExpenses(7, 2, 3, 4, 5));
// console.log(calculateGladiatorExpenses(23, 12.50, 21.50, 40, 200));
