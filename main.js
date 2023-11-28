const buttons = document.querySelectorAll('.digit');
const input = document.getElementById('input');
const history = document.querySelector('.history');
let currentOperator = null;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let buttonValue = button.textContent;
        input.value += buttonValue;
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function(operatorButton) {
    operatorButton.addEventListener('click', function() {
        let operator = operatorButton.textContent;
        
        if (currentOperator !== null) {
            input.value = input.value.slice(0, -1); 
        }
        
        input.value += operator;
        currentOperator = operator;
    });
});
 /* КОчистить */
document.querySelector('.clear').addEventListener('click', function() {
    input.value = '';
    currentOperator = null;
});
  /* Посчитать */
document.querySelector('.calculate').addEventListener('click', function() {
    try {
        let res= eval(input.value);
        const newParagraph = document.createElement('p');
        newParagraph.textContent = input.value + '=' + res;
        history.appendChild(newParagraph);
        input.value = res;
        currentOperator = null;
    } catch (error) {
        input.value = 'Ошибка';
    }
});