function findWord(word, text) {
    word = word.toLowerCase();
    textToArray = text.toLowerCase().split(" ");

    for (let i = 0; i < textToArray.length; i++) {
        if (textToArray[i] === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}


// findWord('javascript', 'JavaScript is the best programming language');
// findWord('python', 'JavaScript is the best programming language');
