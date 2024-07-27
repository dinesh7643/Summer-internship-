/*
for (let i = 1; i <= 15; i++) {
    console.log(i);
}
*/


/*
for (let i = 12; i <= 24; i++) {
    console.log(i);
}*/




/*for (let i = 7; i <= 31; i++) {
    
    if (i % 2 !== 0) {
        console.log(i);
    }
}*/



/*for (let i = 10; i >= -20; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

    
/*for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 7 === 0) {
        console.log(i);
    }
}*/



/*function reverseNumber(num) {
    let reversed = 0;
    let original = num;

    while (num > 0) {
        let digit = num % 10; 
        reversed = (reversed * 10) + digit; 
        num = Math.floor(num / 10); 
    }

    return reversed;
}


let number = 12345;
console.log("Original number:", number);
console.log("Reversed number:", reverseNumber(number));*/



/*function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}


let number = 5;
console.log("Factorial of", number, "is", factorial(number));*/










/*function sumOfNaturalNumbers(n) {
    if (n < 1) {
        return "Input should be a positive integer.";
    }

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Example usage:
let n = 10;
console.log("Sum of the first", n, "natural numbers is", sumOfNaturalNumbers(n));*/










/*
function calculator(num1, num2, operator) {
    let result;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Error: Invalid operator';
    }
    
    return result;
}

// Example usage
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

let result = calculator(num1, num2, operator);
alert("The result is: " + result);*/



