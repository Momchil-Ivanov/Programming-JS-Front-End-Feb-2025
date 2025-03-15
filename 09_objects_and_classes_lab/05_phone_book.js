function phoneBook(entries) {
    const phoneBook = {};

    entries.forEach(entry => {
        const [name, number] = entry.split(' ');
        phoneBook[name] = number;
    });

    for (const [name, number] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${number}`);
    }
}

// phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
// phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);
