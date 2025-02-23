function calculateCircleArea(radius) {
    let inputType = typeof (radius);

    if (inputType === 'number') {
        return (Math.PI * radius ** 2).toFixed(2);
    } else {
        return `We can not calculate the circle area, because we receive a ${inputType}.`;
    }
}

// console.log(calculateCircleArea(5));
// console.log(calculateCircleArea('name'));
