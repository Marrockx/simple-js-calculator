const button = document.querySelector('.calculator-inner-wrap');
const calcScreen = document.querySelector('.calculator-result-screen')

button.addEventListener('click', function () {
    // alert(`clicked ${event.target.innerText}`)
    calcScreen.innerHTML = `${event.target.innerText}`
    console.log(calcScreen)
})