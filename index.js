// const results = document.getElementById("result");

// function fetchNums() {
//     num1 = Number.parseInt(document.getElementById("num1").value);
//     num2 = Number.parseInt(document.getElementById("num2").value);
//     result = document.createElement("p");

    
// }

// function add() {
//     clear();
//     fetchNums();
//     result.innerHTML = num1 + num2;
//     document.getElementById("result").appendChild(result);
//     history("+", num1, num2, result.innerHTML);
// }

// function minus() {
//     clear();
//     fetchNums();
//     result.innerHTML = num1 - num2;
//     document.getElementById("result").appendChild(result);
//     history("-", num1, num2, result.innerHTML);
// }

// function multiply() {
//     clear();
//     fetchNums();
//     result.innerHTML = num1 * num2;
//     document.getElementById("result").appendChild(result);
//     history("*", num1, num2, result.innerHTML);
// }

// function divide() {
//     clear();
//     fetchNums();
//     result.innerHTML = num1 / num2;
//     document.getElementById("result").appendChild(result);
//     history("/", num1, num2, result.innerHTML);
// }

// function clear() {
//     results.innerHTML = "";
// }

// function history(operation, number1, number2, calcResult) {
//     const calcHistory = document.createElement("p");
//     calcHistory.innerText = number1 + operation + number2 + "=" + calcResult;
//     document.getElementById("history").appendChild(calcHistory);
// }

const results = document.getElementById("result");

function calc(operator) {
    results.innerHTML = "";
    num1 = Number.parseInt(document.getElementById("num1").value);
    num2 = Number.parseInt(document.getElementById("num2").value);
    result = document.createElement("p");
    let operation;
    switch(operator) {
        case "+":
            result.innerHTML = num1 + num2;
            break;
        case "-":
            result.innerHTML = num1 - num2;
            break;
        case "*":
            result.innerHTML = num1 * num2;
            break;
        case "/":
            result.innerHTML = num1 / num2;
            break;
        default:
            break;

    }
    document.getElementById("result").appendChild(result);
    const calcHistory = document.createElement("p");

    const calcString = `${num1} ${operator} ${num2} = ${results.innerText}`
    calcHistory.innerText = calcString;

    // calcArray = calcString.split(" ");

    // calcHistory.addEventListener('click', () => alert(calcString));
    // or     
    calcHistory.addEventListener('click', (e) => alert(e.target.innerText));


    document.getElementById("history").appendChild(calcHistory);
    calcHistory.addEventListener('click', (e) => {calcArray = e.target.innerText.split(" "); num1.value = num1});
    // I think error with this line ^ is that needs to be num1.value = number1, where number1 is the input for a function, i.e. this needs to be in its own function
    // with the rest of the history functionality.

    // document.getElementById("num1").value = 12;
}

