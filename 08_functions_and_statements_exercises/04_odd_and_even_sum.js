function oddAndEvenSum(num) {
    const numStr = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

// const result = oddAndEvenSum(1000435);
// console.log(result);

// const result2 = oddAndEvenSum(3495892137259234);
// console.log(result2);
