function multiplyFrom1To10(number) {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += `${number} X ${i} = ${number * i}\n`;
    }

    console.log(output);
}

// multiplyFrom1To10(5);
// multiplyFrom1To10(2);
