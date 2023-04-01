const numberButtons = document.querySelectorAll('.key.number');
const operatorButtons = document.querySelectorAll('.key.operator');
const equalsButton = document.querySelector('.key.equals');
const clearButton = document.querySelector('.key.clear');
const deleteButton = document.querySelector('.key.backspace');
const resultDisplay = document.querySelector('.display');
const decimalButton = document.querySelector('.key.decimal');



// Initialize variables
let firstOperand = [];
let operator = '';
let secondOperand = [];
let result = '';

function updateResultDisplay(result) {
    const resultDisplay = document.querySelector('.display');
    resultDisplay.innerHTML = result;
}

// Functions for basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Divide by zero';
    }
    return a / b;
}


// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator) {
            secondOperand.push(button.value);
            resultDisplay.innerHTML = secondOperand.join('');
        } else {
            firstOperand.push(button.value);
            resultDisplay.innerHTML = firstOperand.join('');
        }

    })
})

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.value;
        resultDisplay.innerHTML = button.value;

    })
})

// Add event listener to equals button
equalsButton.addEventListener('click', () => {
    if (operator && secondOperand.length > 0) {
        switch (operator) {
            case '+':
                result = add(Number(firstOperand.join('')), Number(secondOperand.join('')));
                console.log(result)
                break;
            case '-':
                result = subtract(Number(firstOperand.join('')), Number(secondOperand.join('')));
                console.log(result)
                break;
            case '*':
                result = multiply(Number(firstOperand.join('')), Number(secondOperand.join('')));
                console.log(result)
                break;
            case '/':
                result = divide(Number(firstOperand.join('')), Number(secondOperand.join('')));
                console.log(result)
                break;
        }
        firstOperand = [result.toString()];
        resultDisplay.innerHTML = firstOperand[0];

        operator = '';
        secondOperand = [];

    }
})

// Add event listener to clear button
clearButton.addEventListener('click', () => {
    firstOperand = [];
    operator = '';
    secondOperand = [];
    result = '';
    resultDisplay.innerHTML = ''

})

// Add event listener to delete button
deleteButton.addEventListener('click', () => {
    if (operator && secondOperand.length > 0) {
        secondOperand.pop();
        resultDisplay.innerHTML = secondOperand.join('');
    } else if (firstOperand.length > 0) {
        firstOperand.pop();
        resultDisplay.innerHTML = firstOperand.join('');
    }

});

decimalButton.addEventListener('click', () => {
    if (operator) {
        if (secondOperand.indexOf('.') === -1) { // make sure there is no existing decimal point
            secondOperand.push('.');
            resultDisplay.innerHTML = secondOperand.join('');
        }
    } else {
        if (firstOperand.indexOf('.') === -1) {
            firstOperand.push('.');
            resultDisplay.innerHTML = firstOperand.join('');
        }
    }
});