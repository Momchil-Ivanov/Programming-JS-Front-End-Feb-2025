function wordsTracker(arr) {
    const wordsToCount = arr[0].split(' ');
    const wordCount = {};

    wordsToCount.forEach(word => {
        wordCount[word] = 0;
    });

    for (let i = 1; i < arr.length; i++) {
        const currentWord = arr[i];
        wordsToCount.forEach(word => {
            if (currentWord === word) {
                wordCount[word]++;
            }
        });
    }

    const sortedWords = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}

// wordsTracker([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

// wordsTracker([
//     'is the', 
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
//     );
