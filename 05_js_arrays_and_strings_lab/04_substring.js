function getSubstring(text, startIndex, count) {
    substring = ''

    for (let i = startIndex; i < startIndex + count; i++) {
        if (i == text.length) {
            break;
        }
        substring += text[i];
    }

    console.log(substring);
}

// getSubstring("ASentence", 1, 8);
// getSubstring("SkipWord", 4, 7);
