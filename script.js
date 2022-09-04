let num1 = Number(document.getElementById('firstNumber').value);
let num2 = Number(document.getElementById('secondNumber').value);
let result = document.getElementById('result');

const add = function() {
    return result.innerText = num1 + num2;
}

const subtract = function() {
    return result.innerText = num1 - num2;
}

const multiply = function() {
    return result.innerText = num1 * num2;
}

const divide = function() {
    return result.innerText = num1 / num2;
}