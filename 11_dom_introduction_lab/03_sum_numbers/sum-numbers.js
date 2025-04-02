function calc() {
    let input1 = document.getElementById('num1');
    let input2 = document.getElementById('num2');

    let sum = Number(input1.value) + Number(input2.value);

    let result = document.getElementById('sum');
    result.value = sum;
}