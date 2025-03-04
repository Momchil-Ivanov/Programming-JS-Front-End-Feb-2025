function rorateArray(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));
}

// rorateArray([51, 47, 32, 61, 21], 2);
// rorateArray([32, 21, 61, 1], 4);
// rorateArray([2, 4, 15, 31], 5);
