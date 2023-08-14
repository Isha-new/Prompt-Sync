import promptSync = require("prompt-sync");
const prompt = promptSync();

let operationSign = prompt("Enter the Operation Sign: ");
let firstNumber = parseInt(prompt("Enter the Operation Sign: "));
let secondNumber = parseInt(prompt("Enter the Operation Sign: "));

if (operationSign == "+"){
    let add = firstNumber + secondNumber;
    console.log(add);
}else if (operationSign == "-"){
    let substract = firstNumber - secondNumber;
    console.log(substract);
}else if (operationSign == "*"){
    let multiply = firstNumber * secondNumber;
    console.log(multiply);
}else if (operationSign == "/"){
    let divide = firstNumber / secondNumber;
    console.log(divide);
}else if (operationSign == "%"){
    let remainder = firstNumber % secondNumber;
    console.log(remainder);
}



