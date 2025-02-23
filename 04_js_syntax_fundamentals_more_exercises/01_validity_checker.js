function checkIFDistanceIsValid(x1, y1, x2, y2) {
    const distanceBetweenFirstPointAndBeginning = Math.sqrt(x1 ** 2 + y1 ** 2);
    const distanceBetweenSecondPointAndBeginning = Math.sqrt(x2 ** 2 + y2 ** 2);
    const distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    let isValidDistanceBetweenFirstPointAndBeginning = 'valid';
    let isValidDistanceBetweenSecondPointAndBeginning = 'valid';
    let isValidDistanceBetweenPoints = 'valid';

    if (Number.isInteger(distanceBetweenFirstPointAndBeginning) === false) {
        isValidDistanceBetweenFirstPointAndBeginning = 'invalid';
    }
    if (Number.isInteger(distanceBetweenSecondPointAndBeginning) === false) {
        isValidDistanceBetweenSecondPointAndBeginning = 'invalid';
    }
    if (Number.isInteger(distanceBetweenPoints) === false) {
        isValidDistanceBetweenPoints = 'invalid';
    }

    result = `{${x1}, ${y1}} to {0, 0} is ${isValidDistanceBetweenFirstPointAndBeginning}` + '\n' +
        `{${x2}, ${y2}} to {0, 0} is ${isValidDistanceBetweenSecondPointAndBeginning}` + '\n' +
        `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistanceBetweenPoints}`;

    return result;
}

// console.log(checkIFDistanceIsValid(3, 0, 0, 4));
// console.log(checkIFDistanceIsValid(2, 1, 1, 1));
