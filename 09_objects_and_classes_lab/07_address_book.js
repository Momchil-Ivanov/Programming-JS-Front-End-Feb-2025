function addressBook(input) {
    const addressMap = {};

    input.forEach(entry => {
        const [name, address] = entry.split(':');
        addressMap[name] = address;
    });

    Object.keys(addressMap).sort().forEach(name => {
        console.log(`${name} -> ${addressMap[name]}`);
    });
}

// addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
// addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);
