const num1 = Number(document.getElementById('firstNumber').value);
const num2 = Number(document.getElementById('secondNumber').value);
let result = document.getElementById('result');



add = () => {
    return result.innerText = num1 + num2;
}

subtract = () => {
    return result.innerText = num1 - num2;
}

multiply = () => {
    return result.innerText = num1 * num2;
}

divide = () => {
    return result.innerText = num1 / num2;
}
