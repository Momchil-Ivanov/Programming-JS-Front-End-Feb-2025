function getCharactersInRange(char1, char2) {
    const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}

// const result = getCharactersInRange('a', 'd');
// console.log(result);
// const result2 = getCharactersInRange('#', ':');
// console.log(result2);
// const result3 = getCharactersInRange('C', '#');
// console.log(result3);
