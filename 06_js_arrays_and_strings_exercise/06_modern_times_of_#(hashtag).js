function findHashtags(text) {
    let hashtags = [];
    let words = text.split(" ");
    for (let word of words) {
        if (word.startsWith("#") && word.length > 1 && /^[a-zA-Z]+$/.test(word.slice(1))) {
            hashtags.push(word.slice(1));
        }
    }
    console.log(hashtags.join("\n"));
}

// findHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');
// findHashtags('The symbol # is known #variously in English-speaking #regions as the #number sign');
