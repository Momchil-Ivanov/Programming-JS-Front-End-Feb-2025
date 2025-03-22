function storeProvision(currentStock, orderedStock) {
    const stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = parseInt(currentStock[i + 1], 10);
        stock[product] = (stock[product] || 0) + quantity;
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        const product = orderedStock[i];
        const quantity = parseInt(orderedStock[i + 1], 10);
        stock[product] = (stock[product] || 0) + quantity;
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}

// const currentStock = [
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
// ];
// const orderedStock = [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
// ];

// storeProvision(currentStock, orderedStock);
