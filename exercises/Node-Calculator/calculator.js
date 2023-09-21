const readline = require("readline-sync");
//A function that adds two numbers and returns the result
function sum (num1, num2) {
    return +num1 + +num2
}
//must use += in order for it to add
function minus (num1, num2) {
  return num1 - num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2;
}



const num1 = readline.question("What's your favorite number? ")

const num2 = readline.question("How old are you? ")

const operation = readline.question("Do you want to 'add' 'subtract' 'multiply' or 'divide'? ")

if (operation === "add") {
  console.log("The result is " + sum(num1, num2));
} else if (operation === "subtract") {
  console.log("The result is " + minus(num1, num2));
} else if (operation === "multiply") {
  console.log("The result is " + multiply(num1, num2));
} else if (operation === "divide") {
  console.log("The result is " + divide(num1, num2));
} else {
    console.log("In correct command, try again")
}