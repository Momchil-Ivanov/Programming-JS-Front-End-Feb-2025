function flightSchedule(input) {
    const [allFlights, changedStatuses, [checkStatus]] = input;
    
    const flights = allFlights.map(flight => {
        const [flightNum, destination] = flight.split(' ');
        return {
            flightNumber: flightNum,
            destination: destination,
            status: 'Ready to fly'
        };
    });

    changedStatuses.forEach(change => {
        const [flightNum, newStatus] = change.split(' ');
        const flight = flights.find(f => f.flightNumber === flightNum);
        if (flight) {
            flight.status = newStatus;
        }
    });

    if (checkStatus === 'Ready to fly') {
        flights
            .filter(flight => flight.status === 'Ready to fly')
            .forEach(flight => {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            });
    } else {
        flights
            .filter(flight => flight.status === checkStatus)
            .forEach(flight => {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            });
    }
}

// flightSchedule([
//     ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio',
//      'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas',
//      'KL5744 Illinois', 'WN678 Pennsylvania'],
//     ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'],
//     ['Cancelled']
// ]);

// Test case 2
// flightSchedule([
//     ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio',
//      'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas',
//      'KL5744 Illinois', 'WN678 Pennsylvania'],
//     ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
//     ['Ready to fly']
// ]);
