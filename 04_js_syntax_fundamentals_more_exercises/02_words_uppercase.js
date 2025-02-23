function convertWordsToUppercase(words) {
    const regexToFindWordsInText = /\b\w+\b/g;
    const wordsInText = words.match(regexToFindWordsInText);
    const wordsInTextUppercase = wordsInText.map(word => word.toUpperCase());
    return wordsInTextUppercase.join(', ');
}

// console.log(convertWordsToUppercase('Hi, how are you?'));
// console.log(convertWordsToUppercase('hello'));
