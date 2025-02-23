function checkIfNumbersAreSame(number) {
    let numberAsString = number.toString();
    let firstDigit = numberAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
        if (numberAsString[i] !== firstDigit) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

// checkIfNumbersAreSame(2222222);
// checkIfNumbersAreSame(1234);
