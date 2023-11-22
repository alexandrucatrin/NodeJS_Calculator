const readlineSync = require('readline-sync');

function performOperation(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return 'Error: Division by zero';
      }
    case 'sin':
      return Math.sin(num1);
    case 'cos':
      return Math.cos(num1);
    case 'tan':
      return Math.tan(num1);
    case 'asin':
      return Math.asin(num1);
    case 'acos':
      return Math.acos(num1);
    case 'atan':
      return Math.atan(num1);
    case 'exit':
      process.exit();
    default:
      return 'Invalid operator';
  }
}

function startCalculator() {
  while (true) {
    const num1 = parseFloat(readlineSync.question('Enter the first number: '));

    if (isNaN(num1)) {
      console.log('Error: Invalid input. Please enter a valid number.');
      continue;
    }

    const operator = readlineSync.question('Enter the operator (+, -, *, /, sin, cos, tan, asin, acos, atan) or type "exit" to end: ');

    if (!['+', '-', '*', '/', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'exit'].includes(operator)) {
      console.log('Error: Invalid operator. Please enter a valid operator.');
      continue;
    }

    // If the operation is sin, cos, tan, asin, acos, or atan, only one operand is needed
    const num2 = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan'].includes(operator) ? null : parseFloat(readlineSync.question('Enter the second number: '));

    if (num2 !== null && isNaN(num2)) {
      console.log('Error: Invalid input. Please enter a valid number.');
      continue;
    }

    const result = performOperation(operator, num1, num2);

    if (typeof result === 'string') {
      console.log(result);
    } else {
      console.log(`Result: ${result}`);
    }

    const choose = readlineSync.question("Do you want to continue? (y/n): ");
    if (choose.toLowerCase() !== "y") {
      console.log('Exiting the calculator. Goodbye!');
      break;
    }
  }
}

startCalculator();

