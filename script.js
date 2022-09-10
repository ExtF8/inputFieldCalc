let num1 = Number(document.getElementById('firstNumber').value);
let num2 = Number(document.getElementById('secondNumber').value);
let result = document.getElementById('result');



add = () => {
    return result.innerText = num1 + num2;
}

subtract = () => {
    return result.innerText = num1 - num2;
}

// multiply without * , with cycle - for/while/

// multiply = () => {
//     let results = num1;
//     for (let i = 0; i <= num2; i++) {
//         results = i * num1;
//     }
//     return result.innerText = results;
// }

let results = num1;
for (let i = 0; i <= num2; i++) {
    results = i * num1;
}
console.log(results);

// multiply = () => {
//     return result.innerText = num1 * num2;
// }

divide = () => {
    return result.innerText = num1 / num2;
}

