function loadingBar(number) {
    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        console.log(`${number}% [${"%".repeat(number / 10)}${".".repeat(10 - number / 10)}]`);
        console.log("Still loading...");
    }
}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);
