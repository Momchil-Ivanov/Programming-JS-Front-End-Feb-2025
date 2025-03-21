function validatePoints(points) {
    const [x1, y1, x2, y2] = points;

    // Check distance from (x1, y1) to (0, 0)
    let distance1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(distance1) ? 'valid' : 'invalid'}`);

    // Check distance from (x2, y2) to (0, 0)
    let distance2 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(distance2) ? 'valid' : 'invalid'}`);

    // Check distance from (x1, y1) to (x2, y2)
    let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance3) ? 'valid' : 'invalid'}`);
}

// validatePoints([3, 0, 0, 4]);
// validatePoints([2, 1, 1, 1]);