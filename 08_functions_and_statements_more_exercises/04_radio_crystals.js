function processCrystals(input) {
    const targetThickness = input[0];
    const chunks = input.slice(1);

    chunks.forEach((chunk) => {
        console.log(`Processing chunk ${chunk} microns`);
        let currentThickness = chunk;
        const operations = [];

        while (true) {
            if (currentThickness / 4 >= targetThickness) {
                let cuts = 0;
                while (currentThickness / 4 >= targetThickness) {
                    currentThickness /= 4;
                    cuts++;
                }
                operations.push(`Cut x${cuts}`);
                currentThickness = Math.floor(currentThickness);
            } else if (currentThickness * 0.8 >= targetThickness) {
                let laps = 0;
                while (currentThickness * 0.8 >= targetThickness) {
                    currentThickness *= 0.8;
                    laps++;
                }
                operations.push(`Lap x${laps}`);
                currentThickness = Math.floor(currentThickness);
            } else if (currentThickness - 20 >= targetThickness) {
                let grinds = 0;
                while (currentThickness - 20 >= targetThickness) {
                    currentThickness -= 20;
                    grinds++;
                }
                operations.push(`Grind x${grinds}`);
                currentThickness = Math.floor(currentThickness);
            } else if (currentThickness > targetThickness) {
                let etches = 0;
                while (currentThickness > targetThickness) {
                    currentThickness -= 2;
                    etches++;
                }
                operations.push(`Etch x${etches}`);
                currentThickness = Math.floor(currentThickness);
            } else {
                break;
            }
            operations.push("Transporting and washing");
        }

        if (currentThickness < targetThickness) {
            operations.push("X-ray x1");
            currentThickness += 1;
        }

        operations.push(`Finished crystal ${currentThickness} microns`);
        operations.forEach(op => console.log(op));
    });
}

// Example usage:
// processCrystals([1375, 50000]);
// processCrystals([1000, 4000, 8100]);
