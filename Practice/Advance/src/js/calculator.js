// src/js/calculator.js

document.addEventListener("DOMContentLoaded", function() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll(".operation");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const operation = this.value;
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                resultDisplay.textContent = "Please enter valid numbers!";
                return;
            }

            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        resultDisplay.textContent = "ERROR! Divisor cannot be zero!";
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultDisplay.textContent = "Invalid operation!";
                    return;
            }

            resultDisplay.textContent = `Result: ${result}`;
        });
    });

    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';
    const display = document.getElementById('result');

    // Add event listeners to all number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    // Add event listener for decimal point
    document.querySelector('.decimal').addEventListener('click', () => {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    });

    // Add event listeners to operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    calculate();
                }
                currentOperator = button.textContent;
                previousInput = currentInput;
                currentInput = '';
            }
        });
    });

    // Add event listener for equals button
    document.querySelector('.equals').addEventListener('click', calculate);

    // Add event listener for clear button
    document.querySelector('.clear').addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        currentOperator = '';
        updateDisplay();
    });

    function calculate() {
        if (previousInput === '' || currentInput === '') return;
        
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch(currentOperator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                result = prev / current;
                break;
        }

        currentInput = result.toString();
        previousInput = '';
        currentOperator = '';
        updateDisplay();
    }

    function updateDisplay() {
        display.value = currentInput || '0';
    }

    // Initialize display
    updateDisplay();
});