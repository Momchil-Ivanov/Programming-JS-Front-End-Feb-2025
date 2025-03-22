function sequences(input) {
    let uniqueArrays = new Map();
    
    for (let arrayStr of input) {
        let currentArray = JSON.parse(arrayStr);
        
        currentArray.sort((a, b) => b - a);
        
        let arrayKey = currentArray.toString();
        
        if (!uniqueArrays.has(arrayKey)) {
            uniqueArrays.set(arrayKey, {
                array: currentArray,
                length: currentArray.length,
                index: uniqueArrays.size
            });
        }
    }

    let result = Array.from(uniqueArrays.values())
        .sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length;
            }
            return a.index - b.index;
        })
        .map(item => `[${item.array.join(', ')}]`);

    console.log(result.join('\n'));
}

// sequences([
//     "[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"
// ]);

// sequences([
//     "[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);
