function login(dataArray) {
    let username = dataArray[0];
    incorrectCounter = 0;
    incorrectCounterMax = 3;

    for (let i = 1; i < dataArray.length; i++) {
        passwordReversed = dataArray[i].split('').reverse().join('');
        if (passwordReversed === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (incorrectCounter === incorrectCounterMax) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
            incorrectCounter++;
        }
    }
}

// login(['Acer','login','go','let me in','recA']);
// login(['momo','omom']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);
