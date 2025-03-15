function printDNAHelix(length) {
    const bases = [["A", "T"], ["C", "G"], ["T", "T"], ["A", "G"], ["G", "G"]];
    const helix = [];
    
    for (let i = 0; i < length; i++) {
        const currentBases = bases[i % bases.length];
        if (i % 2 !== 0) {
            helix.push(`*${currentBases[0]}--${currentBases[1]}*`);
        } else if (i % 4 === 0) {
            helix.push(`**${currentBases[0]}${currentBases[1]}**`);
        } else if (i % 4 === 2) {
            helix.push(`${currentBases[0]}----${currentBases[1]}`);
        }
    }

    for (let i = 0; i < helix.length; i++) {
        console.log(helix[i]);
    }
}

// const length = 10; // You can change this value to test with different lengths
// printDNAHelix(length);
