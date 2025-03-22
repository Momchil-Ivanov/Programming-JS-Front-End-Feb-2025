function garage(input) {
    let garages = {};
    
    for (let entry of input) {
        let [garageNum, carInfo] = entry.split(' - ');
        
        if (!garages[garageNum]) {
            garages[garageNum] = [];
        }
        
        let carProperties = {};
        carInfo.split(', ').forEach(prop => {
            let [key, value] = prop.split(': ');
            carProperties[key] = value;
        });
        
        garages[garageNum].push(carProperties);
    }
    
    let result = [];
    
    Object.keys(garages).sort((a, b) => Number(a) - Number(b)).forEach(garageNum => {
        result.push(`Garage № ${garageNum}`);
        
        garages[garageNum].forEach(car => {
            let carInfo = Object.entries(car)
                .map(([key, value]) => `${key} - ${value}`)
                .join(', ');
            result.push(`--- ${carInfo}`);
        });
    });
    
    return result.join('\n');
}

// console.log(garage([
//     '1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ]));

// console.log(garage([
//     '1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol'
// ]));
