function simpleCalculator(num1, num2, operator) {
    if (operator === "add") {
        console.log(num1 + num2)
    } else if (operator === "subtract") {
        console.log(num1 - num2)
    } else if (operator === "multiply") {
        console.log(num1 * num2)
    } else if (operator === "divide") {
        console.log(num1 / num2)
    }
}

// simpleCalculator(5, 5, "multiply")
// simpleCalculator(40, 8, "divide")
// simpleCalculator(12, 19, "add")
// simpleCalculator(50, 13, "subtract")
