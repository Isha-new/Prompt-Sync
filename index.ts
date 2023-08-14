import promptSync = require("prompt-sync");

// const prompt = {
//     output: {
//       libraryTarget: 'umd' 
//     }
//   };
//   module.exports = prompt;

const prompt = promptSync();

let Balance = parseInt(prompt("Enter your Balance: "));
let minBalance = parseInt(prompt("Enter your minimum Balance: "));
let maxBalance = parseInt(prompt("Enter your maximum Balance: "));

let credit = Balance + minBalance + maxBalance;
if (credit >= 250 && credit <= 300){
    console.log("A+");

}else if (credit >= 220 && credit <= 250){
    console.log("B+");

}else if (credit >= 180 && credit <= 220){
    console.log("C");

}else if (credit >= 150 && credit <= 180){
    console.log("D");

}else if (credit >= 0 && credit <= 150){
    console.log("Low");
}