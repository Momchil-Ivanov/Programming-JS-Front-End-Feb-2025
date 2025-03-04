function sortNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let result = [];
    const midIndex = Math.floor(sortedNumbers.length / 2); // Calculate the middle index

    for (let i = 0; i < midIndex; i++) {
        result.push(sortedNumbers[i]);
        result.push(sortedNumbers[sortedNumbers.length - 1 - i]);
    }

    // If the length is odd, add the middle element once
    if (sortedNumbers.length % 2 !== 0) {
        result.push(sortedNumbers[midIndex]);
    }

    return result;
}

// console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, 18, 56]));
