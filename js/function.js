const calculator = document.querySelector('.calculator-wrap')
const button = document.querySelector('.calculator-inner-wrap');

const calcDelButton = document.querySelector('[data-delete]')
const calcClearButton = document.querySelector('[data-clear]')
const calcDisplay = document.querySelector('.calculator-result-screen')

calcDisplay.innerText = 0;
button.addEventListener('click', function (evt) {

    const previousKeyType = calculator.dataset.previousKeyType

    if (evt.target.matches('button')) {
        const key = evt.target;
        const num = key.dataset.digit;
        const keyValue = key.textContent;

        const action = key.dataset.action;
        const displayedNum = calcDisplay.textContent;


        if (num) {


            calcDisplay.textContent = keyValue;

            calculator.dataset.previousKeyType = 'number'

            if (displayedNum === '0' || previousKeyType === 'operator') {
                calcDisplay.textContent = keyValue;
            }
            else {
                calcDisplay.textContent = displayedNum + keyValue;
            }

            calculator.dataset.previousKeyType = 'number'
        }


        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            calculator.dataset.previousKeyType = 'operator'
            console.log('operator key!')
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            calcDisplay.textContent = 0;

        }




        if (action === 'calculate') {
            // console.log('equal key!')
            calculator.dataset.previousKeyType = 'calculate'
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            calcDisplay.textContent = calculate(firstValue, operator, secondValue)
        }

    }

})



calcClearButton.addEventListener('click', () => {
    // console.log('clear key')
    calcDisplay.textContent = 0;
    calculator.dataset.previousKeyType = 'clear';
})



calcDelButton.addEventListener('click', () => {
    // console.log('delete')
    calcDisplay.textContent = calcDisplay.textContent.toString().slice(0, -1);
    // if (!calcDisplay.textContent) {
    //     calcDisplay.textContent = 0;
    // }
    calculator.dataset.previousKeyType = 'delete';

})


const calculate = (n1, operator, n2) => {
    switch (operator) {
        case 'add':
            return parseInt(n1) + parseInt(n2)

        case 'subtract':
            return parseInt(n1) - parseInt(n2)

        case 'multiply':
            return parseFloat(n1) * parseInt(n2)

        case 'divide':
            return parseInt(n1) / parseInt(n2)
    }
}