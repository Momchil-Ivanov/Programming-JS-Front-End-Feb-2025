function oddOccurrences(sentence) {
    const words = sentence.split(' ');
    const wordCount = {};
    const order = [];

    words.forEach(word => {
        const lowerWord = word.toLowerCase();
        if (!wordCount[lowerWord]) {
            order.push(lowerWord);
        }
        wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
    });

    const oddWords = order.filter(word => wordCount[word] % 2 !== 0);

    return oddWords.join(' ');
}

// console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
// console.log(oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food'));
