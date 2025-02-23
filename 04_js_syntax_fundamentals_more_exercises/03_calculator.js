function calculate(a, operator, b) {
    if (operator === '+') {
        return (a + b).toFixed(2);
    } else if (operator === '-') {
        return (a - b).toFixed(2);
    } else if (operator === '*') {
        return (a * b).toFixed(2);
    } else if (operator === '/') {
        return (a / b).toFixed(2);
    } else {
        return 'Invalid operator';
    }
}

// console.log(calculate(5, '+', 10));
// console.log(calculate(25.5,'-',3));
