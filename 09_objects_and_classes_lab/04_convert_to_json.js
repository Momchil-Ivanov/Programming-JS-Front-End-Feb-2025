function convertToJSON(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };
    
    const jsonString = JSON.stringify(person);
    console.log(jsonString);
}

// convertToJSON('George', 'Jones', 'Brown');
// convertToJSON('Peter', 'Smith', 'Blond');
