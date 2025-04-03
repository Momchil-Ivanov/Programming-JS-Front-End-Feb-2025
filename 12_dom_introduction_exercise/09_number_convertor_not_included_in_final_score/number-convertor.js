function solve() {
    const input = document.getElementById('input').value;
    const selectMenuTo = document.getElementById('selectMenuTo');
    const resultField = document.getElementById('result');
    const number = parseInt(input, 10);
    let result = '';

    if (selectMenuTo.value === 'binary') {
        result = number.toString(2);
    } else if (selectMenuTo.value === 'hexadecimal') {
        result = number.toString(16).toUpperCase();
    }

    resultField.value = result;
}