let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let random = Math.random();
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Error: divide by zero";
} else {
    result = "Invalid operator";
}


if (random < 0.1 && typeof result === "number")
     {
    result = result + 7; 
}

alert("Result: " + result);
