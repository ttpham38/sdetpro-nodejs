const readline = require("readline-sync");

let yourWeight = Number(readline.question("your weight in meters : "));
let yourHeight = Number(readline.question("your height in kilograms: "));

let yourBMI = yourWeight / (yourHeight * yourHeight);

// In kết quả BMI
console.log("Your BMI: ", yourBMI);

// Đánh giá và đưa ra lời khuyên
if (bmi < 18.5) {
    console.log("You are underweight.");
    console.log("You should consider increasing your weight.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You have a normal weight.");
    console.log("Great job! Keep maintaining your current lifestyle.");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are overweight.");
    console.log("You should consider decreasing your weight.");
} else {
    console.log("You are obese.");
    console.log("You should seriously consider losing weight for better health.");
}
