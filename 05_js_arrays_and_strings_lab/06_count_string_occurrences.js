function countStringOccurrences(text, word) {
    // Split text into array of words and filter matching ones
    const words = text.split(' ');

    const count = words.filter(w => w === word).length;

    console.log(count);
}

// countStringOccurrences('This is a word and it also is a sentence', 'is');
// countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');
