function isPalindrome(numArr) {
    const results = [];

    for (let i = 0; i < numArr.length; i++) {
        const numStr = numArr[i].toString();
        const reversedStr = numStr.split("").reverse().join("");
        if (numStr === reversedStr) {
            results.push(true);
        } else {
            results.push(false);
        }
    }
    return results.join("\n");
}


// const result = isPalindrome([123, 323, 421, 121]);
// console.log(result);

// const result2 = isPalindrome([32,2,232,1010]);
// console.log(result2);
