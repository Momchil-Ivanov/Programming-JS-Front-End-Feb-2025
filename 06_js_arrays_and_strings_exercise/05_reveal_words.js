function revealWords(words, sentence) {
    let wordsArray = words.split(", ");

    let sentenceArray = sentence.split(" ");

    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].includes("*")) {
            for (let j = 0; j < wordsArray.length; j++) {
                if (wordsArray[j].length === sentenceArray[i].length) {
                    sentenceArray[i] = wordsArray[j];
                }
            }
        }
    }

    return sentenceArray.join(" ");
}

// console.log(revealWords('great, learning', 'softuni is ***** place for ******** new programming languages'));
