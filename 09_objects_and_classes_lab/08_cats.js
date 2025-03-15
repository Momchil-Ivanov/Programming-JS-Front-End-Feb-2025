function createCats(catStrings) {
    catStrings.forEach(catString => {
        const [name, age] = catString.split(' ');
        console.log(`${name}, age ${age} says Meow`);
    });
}

// createCats(['Mellow 2', 'Tom 5']);
// createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
