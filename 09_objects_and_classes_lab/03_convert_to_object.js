function convertJsonToObject(jsonString) {
    const obj = JSON.parse(jsonString);
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// convertJsonToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
