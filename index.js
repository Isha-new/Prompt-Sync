"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var Balance = parseInt(prompt("Enter your Balance: "));
var minBalance = parseInt(prompt("Enter your minimum Balance: "));
var maxBalance = parseInt(prompt("Enter your maximum Balance: "));
var credit = Balance + minBalance + maxBalance;
if (credit >= 250 && credit <= 300) {
    console.log("A+");
}
else if (credit >= 220 && credit <= 250) {
    console.log("B+");
}
else if (credit >= 180 && credit <= 220) {
    console.log("C");
}
else if (credit >= 150 && credit <= 180) {
    console.log("D");
}
else if (credit >= 0 && credit <= 150) {
    console.log("Low");
}
