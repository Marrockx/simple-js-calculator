const calculator = document.querySelector('.calculator-wrap')
const btn = document.querySelector('.calculator-inner-wrap');

const calcDelButton = document.querySelector('[data-delete]')
const calcClearButton = document.querySelector('[data-clear]')
const calcDisplay = document.querySelector('.calculator-result-screen')
// let displayedNum = 0;
calcDisplay.innerText = 0;
// const button = document.getElementsByTagName('button');


btn.addEventListener('click', function (evt) {



    // alert(`clicked ${event.target.innerText}`)



    if (evt.target.matches('button')) {
        const key = evt.target;
        const num = key.dataset.digit;
        const keyValue = key.textContent;

        const action = key.dataset.action;

        if (!action) {
            const displayedNum = calcDisplay.textContent;


            calcDisplay.textContent = keyValue;
        }
        //     const keyValue = key.textContent;
        //     // calcDisplay.innerHTML = displayedNum;
        //     console.log(calcDisplay)
        //     // evt.target.innerText = add();

        //     const previousKeyType = calculator.dataset.previousKeyType




        //     } else 
        if (
            action === 'addition' ||
            action === 'subtraction' ||
            action === 'multiplication' ||
            action === 'division'
        ) {
            calculator.dataset.previousKeyType = 'operator'
            console.log('operator key!')
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

        }




        if (action === 'calculate') {
            console.log('equal key!')
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = add(firstValue, operator, secondValue)
        }


        // 
    }

})


