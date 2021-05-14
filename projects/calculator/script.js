
class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //  Method to clear the output (screen)
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    // Method to Delete the output:
    // Delete every number from right to left in the screen.
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }


    //  Method to add number in the output (screen)
    appendNumber(number){
        // if user type '.' more than ones we do not include more '.'
        if(number==='.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }    

    // Method to control the operation buttons
    chooseOperation(operation){
        // if currentOperand is empty we stop the function.
        if(this.currentOperand === '') return;
        // if already have numbers in the previous operand, we will do the operation.
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }

    // Method to compute the operation
    compute(){

        let results;
        // convert string to a number.
        const previous = parseFloat(this.previousOperand);
        // convert string to a number.
        const current = parseFloat(this.currentOperand);

        // check if we have previous and current number to do the operation:
        // is we do not have numbers we cancel the operation.
        if(isNaN(previous) || isNaN(current)) return;
        switch (this.operation){
            case '+':
               results = previous + current; 
               break
            case '-':
               results = previous - current; 
               break
            case '*':
                results = previous * current; 
                break
            case '/':
                results = previous / current; 
                break
            default:
                return               
        }

        this.currentOperand = results;
        this.operation = undefined;
        this.previousOperand = '';

        console.log(results);
    }



    // Method to update display in the output (screen)
    updateDisplay(){
 
        this.currentOperandTextElement.innerText = this.currentOperand;
        // if we have an operation, we will display our previous text.
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
                `${this.previousOperand} ${this.operation}`
        }
        else {
            this.previousOperandTextElement.innerText = '';
        }

    }
}




/* Get all button elements with selector (data-number) 0 - 9 */ 
const numberButtons = document.querySelectorAll('[data-number]');

/* Get all button elements with selector (data-operation) % * + - */ 
const operationButtons = document.querySelectorAll('[data-operation]');

/* Get Equals Button element (data-equals) = */ 
const equalsButton = document.querySelector('[data-equals]');

/* Get Delete Button element (data-equals) DEL */ 
const deleteButton = document.querySelector('[data-delete]');

/* Get All Clear Button element (data-all-clear) AC */ 
const allClearButton = document.querySelector('[data-all-clear]');

/* Get previous Operand Text element (data-previous-operand) */ 
const previousOperandTextElement = document.querySelector('[data-previous-operand]');

/* Get current Operand Text element (data-current-operand) */ 
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

// For Eache time we click the Number buttons:
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

// For Eache time we click the Operation buttons:
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})


// Equals Button ('click'):
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})


// AC button ('click')
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

// DELETE button ('click')
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})