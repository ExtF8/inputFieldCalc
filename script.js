let inputTextValue1 = document.getElementById('firstNumber');
let inputTextValue2 = document.getElementById('secondNumber');
let result = document.getElementById('result');
let num1 = 0;
let num2 = 0;

window.onload = () => {
    num1 = getValue1();
    num2 = getValue2();
}

inputTextValue1.addEventListener("change", (e) => {
    num1 = getValue1();
    console.log(num1);
})

inputTextValue2.addEventListener("change", (e) => {
    num2 = getValue2();
    console.log(num2);
})

getValue1 = () => {
    return Number(inputTextValue1.value);
}

getValue2 = () => {
    return Number(inputTextValue2.value);
}

clearFields = () => {
    inputTextValue1.value = '';
    inputTextValue2.value = '';
    result.innerText = '';
}

add = () => {
    result.innerText = num1 + num2;
}

subtract = () => {
    result.innerText = num1 - num2;
}

// multiply without * , with cycle - for/while/

multiply = () => {
    let f = num1;
    let i = num2;

    ++i;
    while(i < 4) {
        f = f * i;
        ++i;
    }

    console.log("i:", i, "f:", f);
}

// multiply = () => {
//     let results = 0;

//     for (let i = 0; i < num2; i++) {
//         results = results + num1;
//     }
//     result.innerText = results;
// }

// multiply = () => {
//     result.innerText = num1 * num2;
// }

divide = () => {
    result.innerText = num1 / num2;
}

