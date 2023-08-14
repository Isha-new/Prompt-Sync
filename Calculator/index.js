"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var operationSign = prompt("Enter the Operation Sign: ");
var firstNumber = parseInt(prompt("Enter the Operation Sign: "));
var secondNumber = parseInt(prompt("Enter the Operation Sign: "));
if (operationSign == "+") {
    var add = firstNumber + secondNumber;
    console.log(add);
}
else if (operationSign == "-") {
    var substract = firstNumber - secondNumber;
    console.log(substract);
}
else if (operationSign == "*") {
    var multiply = firstNumber * secondNumber;
    console.log(multiply);
}
else if (operationSign == "/") {
    var divide = firstNumber / secondNumber;
    console.log(divide);
}
else if (operationSign == "%") {
    var remainder = firstNumber % secondNumber;
    console.log(remainder);
}
