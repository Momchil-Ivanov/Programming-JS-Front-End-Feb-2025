function mathOperations(num1, num2, operator) {
    switch(operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        case '%': return num1 % num2;
        case '**': return num1 ** num2;
        default: throw new Error('Invalid operator');
    }
}

// console.log(mathOperations(5, 6, '+'));
// console.log(mathOperations(3, 5.5, '*'));
