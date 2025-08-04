// const readline = require("readline-sync");

// let yourHeight = Number(readline.question("Your height in meters: "));
// let yourWeight = Number(readline.question("Your weight in kilograms: "));

// let yourBMI = yourWeight / (yourHeight * yourHeight);


// if (yourBMI < 18.5) {
//     console.log("Underweight");
// }
// else if ((yourBMI >= 18.5) && (yourBMI < 24.9)) {
//     console.log("Normal weight");
// }
// else if ((yourBMI >= 24.9) && (yourBMI < 30)) {
//     console.log("Overweight");
// } else {
//     console.log("Obesity");
// }

// console.log("Your BMI: ", yourBMI);

// Comment review code 
// 2.1 looks good but we can use code below to avoid redundant and code will be run faster.
// else if(bmiValue <= 24.9) instend of else if (BMI >= 18.5 && BMI <= 24.9)
// else if(bmiValue <= 29.9) instend of else if (BMI >= 25 && BMI <= 29.9)


// Updated the code after code review.

const readline = require("readline-sync");

let yourHeight = Number(readline.question("Your height in meters: "));
let yourWeight = Number(readline.question("Your weight in kilograms: "));

let yourBMI = yourWeight / (yourHeight * yourHeight);

if (yourBMI < 18.5) {
    console.log("Underweight");
} else if (yourBMI <= 24.9) {
    console.log("Normal weight");
} else if (yourBMI <= 29.9) {
    console.log("Overweight");
} else {
    console.log("Obesity");
}

console.log("Your BMI: ", yourBMI.toFixed(2));

