const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const {target} = event;
        // Check if clicked element is a button
        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.value);
            updateDisplay();

            return;
        }

        if (target.classList.contains('decimal')) {
            inputDecimal(target.value);
            updateDisplay();
            return;
        }

        if (target.classList.contains('all-clear')) {
            console.log('clear', target.value);
            return;
        }

        inputDigit(target.value);
        updateDisplay();

    });

    function inputDigit(digit) {
        const {displayValue, waitingForSecondOperand} = calculator;

        if (waitingForSecondOperand === true) {
            calculator.displayValue = digit;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
        }

        console.log(calculator);

    }

    function inputDecimal(dot) {
        if (!calculator.displayValue.includes(dot)) {
          calculator.displayValue += dot;
        }
      }

    function handleOperator(nextOperator) {
        const { firstOperand, displayValue, operator } = calculator
        const inputValue = parseFloat(displayValue);
        if (firstOperand === null && !isNaN(inputValue)) {
          calculator.firstOperand = inputValue;
        }
      
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
        console.log(calculator);

      }
      
      