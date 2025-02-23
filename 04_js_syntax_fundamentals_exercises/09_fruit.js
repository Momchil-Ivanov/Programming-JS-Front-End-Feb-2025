function calculateFruitPrice(fruit, weight, price) {
    let weightInGrams = weight;
    let weightInKg = weightInGrams / 1000;
    let pricePerKg = price * weightInKg;

    console.log(`I need $${pricePerKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

// calculateFruitPrice('orange', 2500, 1.80);
// calculateFruitPrice('apple', 1563, 2.35);
