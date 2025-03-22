function parseTowns(input) {
    const towns = [];

    for (let i = 0; i < input.length; i++) {
        const row = input[i];
        const [townName, lat, long] = row.split(' | ').map(item => item.trim());
        
        const townObject = {
            town: townName,
            latitude: parseFloat(lat).toFixed(2),
            longitude: parseFloat(long).toFixed(2)
        };

        towns.push(townObject);
    }
    
    for (const town of towns) {
        console.log(town);
    }
}

// const input = [
//     'Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625',
//     'Plovdiv | 136.45 | 812.575'
// ];

// parseTowns(input);
