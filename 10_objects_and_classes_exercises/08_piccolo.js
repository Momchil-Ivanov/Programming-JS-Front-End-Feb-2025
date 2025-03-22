function manageParkingLot(entries) {
    const parkingLot = new Set();

    for (const entry of entries) {
        const [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    const sortedCars = Array.from(parkingLot).sort();
    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        sortedCars.forEach(car => console.log(car));
    }

}

// const input = [
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ];

// manageParkingLot(input);

// const input2 = [
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ];

// manageParkingLot(input2);
