function reverseArray(n, arr) {
    let shorterArray = arr.slice(0, n);
    let reversedArray = shorterArray.reverse();
    console.log(reversedArray.join(" "));
}

// reverseArray(3, [10, 20, 30, 40, 50]);
// reverseArray(4, [-1, 20, 99, 5]);
// reverseArray(2, [66, 43, 75, 89, 47]);
