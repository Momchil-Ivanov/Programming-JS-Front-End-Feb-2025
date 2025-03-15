function cleanCar(commands) {
    let cleanliness = 0;

    for (const command of commands) {
        switch (command) {
            case 'soap':
                cleanliness += 10;
                break;
            case 'water':
                cleanliness += cleanliness * 0.20;
                break;
            case 'vacuum cleaner':
                cleanliness += cleanliness * 0.25;
                break;
            case 'mud':
                cleanliness -= cleanliness * 0.10;
                break;
            default:
                console.log(`Unknown command: ${command}`);
        }
    }

    cleanliness = Math.round(cleanliness * 100) / 100;

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

// cleanCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// cleanCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
