const calcNumberButtons = document.querySelectorAll('[data-digit]')
// const calcOperatorButtons = document.querySelectorAll('[data-operator]')
const calcEqualsButton = document.querySelector('[data-calculate]')


calcNumberButtons.forEach(button =>

    button.addEventListener('click', (evt) => {
        const key = evt.target;
        // const num = key.dataset.digit;
        const keyValue = key.textContent;
        const displayedNum = calcDisplay.textContent;


        calcDisplay.textContent = keyValue;
        appendNumber(displayedNum, keyValue)

        let previousKeyType = calculator.dataset.previousKeyType;





        // calcOperatorButtons.forEach(button => {
        //     button.addEventListener('click', (evt) => {

        //         calculator.dataset.previousKeyType = 'operator'
        //         console.log('operator key!')
        //         // if (
        //         //     firstValue &&
        //         //     operator &&
        //         //     previousKeyType !== 'operator' &&
        //         //     previousKeyType !== 'calculate'
        //         // ) {
        //         //     const calcValue = calculate(firstValue, operator, secondValue)
        //         //     calcDisplay.textContent = calcValue
        //         //     calculator.dataset.firstValue = calcValue
        //         // } else {
        //         //     calculator.dataset.firstValue = displayedNum
        //         // }



        //     }
        //     )
        // })






        calcEqualsButton.addEventListener('click', () => {
            console.log('equal key')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum;

            calcDisplay.textContent = calculate(firstValue, operator, secondValue)


        })



    }))

appendNumber = (displayVal, keyValue) => {

    let previousKeyType = calculator.dataset.previousKeyType;

    // console.log('number key!')
    calculator.dataset.previousKeyType = 'number'

    if (displayVal === '0' || previousKeyType === 'operator') {
        calcDisplay.textContent = keyValue;
    }
    else {
        calcDisplay.textContent = displayVal + keyValue;
    }

    calculator.dataset.previousKeyType = 'number'

}

calcClearButton.addEventListener('click', () => {
    console.log('clear key')
    calcDisplay.textContent = 0;
    calculator.dataset.previousKeyType = 'clear'
})



calcDelButton.addEventListener('click', () => {
    // console.log('delete')
    calcDisplay.textContent = calcDisplay.textContent.toString().slice(0, -1);
    if (!calcDisplay.textContent) {
        calcDisplay.textContent = 0;
    }

    calculator.dataset.previousKeyType = 'delete'


})


const calculate = (n1, operator, n2) => {
    if (operator === 'add') {
        return parseInt(n1) + parseInt(n2)
    }

    if (operator === 'subtract') {
        return parseInt(n1) - parseInt(n2)
    }

    if (operator === 'multiply') {
        return parseFloat(n1) * parseInt(n2)
    }

    if (operator === 'divide') {
        return parseInt(n1) / parseInt(n2)
    }
}