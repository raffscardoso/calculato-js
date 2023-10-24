let display = document.getElementById("textDisplay");

let numberButtons = document.querySelectorAll('#numberButtons');
let specialButtons = document.querySelectorAll('#specialButtons');
let acButton = document.getElementById('acButton');
let deButton = document.getElementById('deButton');
let equalButton = document.getElementById('equalButton');

equalButton.addEventListener('click', () => {
    display.value = eval(display.value)
    
})

deButton.addEventListener('click', () => {
    display.value = display.value.slice(0,-1);
})

acButton.addEventListener('click', () => {
    display.value = '';
})

for(let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => {
        display.value += numberButtons[i].value
    })
}

for(let i = 0; i < specialButtons.length; i++){
    specialButtons[i].addEventListener("click", () => {
        display.value += specialButtons[i].value
    })
}