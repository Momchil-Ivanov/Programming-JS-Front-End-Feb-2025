function addAndSubtract(num1, num2, num3) {
    function add(num1, num2) {
        const sum = num1 + num2;
        return sum;
    }
    
    function subtract(sum, num3) {
        const result = sum - num3;
        return result;
    }

    const sum = add(num1, num2);
    return subtract(sum, num3);
}

// const result = addAndSubtract(23, 6, 10);
// console.log(result);
// const result2 = addAndSubtract(1, 17, 30);
// console.log(result2);
// const result3 = addAndSubtract(42, 58, 100);
// console.log(result3);
