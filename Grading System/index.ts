import promptSync = require("prompt-sync"); 
const prompt = promptSync();

let Math = parseInt(prompt("Enter your Maths marks: "));
let Urdu = parseInt(prompt("Enter your Urdu marks: "));
let English = parseInt(prompt("Enter your English marks: "));

let marks = Math + Urdu + English
if (marks == 100){
    console.log(`"Your grade is A+"`)
}else if (marks == 50){
    console.log(`"Your grade is B"`)
}else if (marks == 20){
    console.log(`"Your grade is C"`)
}else {
    console.log(`"Your are Fail"`)
}
