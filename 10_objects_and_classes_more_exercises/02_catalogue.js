function createProductCatalog(products) {
    products.sort((a, b) => {
        const nameA = a.split(' : ')[0].toLowerCase();
        const nameB = b.split(' : ')[0].toLowerCase();
        return nameA.localeCompare(nameB);
    });

    const groupedProducts = {};
    products.forEach(product => {
        const initial = product[0].toUpperCase();
        if (!groupedProducts[initial]) {
            groupedProducts[initial] = [];
        }
        groupedProducts[initial].push(product);
    });

    for (const initial in groupedProducts) {
        console.log(initial);
        groupedProducts[initial].forEach(product => {
            console.log(`  ${product.replace(' : ', ': ')}`);
        });
    }
}

// const input = [
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ];

// createProductCatalog(input);

// const input2 = [
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]

// createProductCatalog(input2);
