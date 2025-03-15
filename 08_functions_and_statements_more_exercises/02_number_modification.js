function modifyNumber(inputNumber) {
    let number = inputNumber.toString();

    while (true) {
        const digits = number.split('').map(Number);
        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        const average = sum / digits.length;

        if (average > 5) {
            break;
        }

        number += '9';
    }

    console.log(number);
}

// modifyNumber(101);
// modifyNumber(5835);
