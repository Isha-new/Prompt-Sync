"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var Math = parseInt(prompt("Enter your Maths marks: "));
var Urdu = parseInt(prompt("Enter your Urdu marks: "));
var English = parseInt(prompt("Enter your English marks: "));
var marks = Math + Urdu + English;
if (marks == 100) {
    console.log("\"Your grade is A+\"");
}
else if (marks == 50) {
    console.log("\"Your grade is B\"");
}
else if (marks == 20) {
    console.log("\"Your grade is C\"");
}
else {
    console.log("\"Your are Fail\"");
}
