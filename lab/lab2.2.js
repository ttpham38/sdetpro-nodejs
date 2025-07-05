const readline = require("readline-sync");
let yourNumber = Number(readline.question("Your number: "));

if (yourNumber % 2== 0)
{
    console.log("even number");

}
else
{
    console.log("an odd");

}