
let inputTextValue1 = document.getElementById('firstNumber');
let inputTextValue2 = document.getElementById('secondNumber');
let result = document.getElementById('result');

inputTextValue1.addEventListener("change", (e) => {
    num1 = Number(e.target.value)
    console.log(num1)
    return num1
})

inputTextValue2.addEventListener("change", (e) => {
    num2 = Number(e.target.value)
    console.log(num2)
    return num2
})


add = () => {
    return result.innerText = num1 + num2;
}

subtract = () => {
    return result.innerText = num1 - num2;
}

// multiply without * , with cycle - for/while/

multiply = () => {
    let results = 0;

    for (let i = 0; i < num2; i++) {
        results = results + num1;
    }
    result.innerText = results;
}

// multiply = () => {
//     return result.innerText = num1 * num2;
// }

divide = () => {
    return result.innerText = num1 / num2;
}

