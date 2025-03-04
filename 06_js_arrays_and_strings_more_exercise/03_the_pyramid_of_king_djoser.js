function pyramidOfKingDjoser(base, increment) {
    currentBase = base;
    floorCounter = 0;
    stoneBlocks = 0;
    marbleBlocks = 0;
    lapisLazuliBlocks = 0;
    goldBlocks = 0;

    while (currentBase > 2) {
        floorCounter++;
        allBlocks = currentBase ** 2;
        perimeter = (currentBase - 1) * 4;
        core = allBlocks - perimeter;
        if (floorCounter % 5 === 0) {
            lapisLazuliBlocks += perimeter;
        } else {
            marbleBlocks += perimeter;
        }
        stoneBlocks += core;
        currentBase -= 2;
    }

    floorCounter++;
    goldBlocks = currentBase ** 2;
    
    stone = Math.ceil(stoneBlocks * increment);
    marble = Math.ceil(marbleBlocks * increment);
    lapisLazuli = Math.ceil(lapisLazuliBlocks * increment);
    gold = Math.ceil(goldBlocks * increment);
    pyramidHeight = Math.floor(floorCounter * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
}

// pyramidOfKingDjoser(11, 1);
// pyramidOfKingDjoser(11, 0.75);
// pyramidOfKingDjoser(12, 1);
// pyramidOfKingDjoser(23, 0.5);
