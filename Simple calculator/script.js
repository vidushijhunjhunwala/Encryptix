let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'clear':
                display.value = '';
                num1 = '';
                num2 = '';
                operator = '';
                break;
            case 'equals':
                if (operator && num1 && num2) {
                    let result = calculate(num1, num2, operator);
                    display.value = result;
                    num1 = result;
                    num2 = '';
                    operator = '';
                }
                break;
            case 'add':
            case 'ubtract':
            case 'ultiply':
            case 'divide':
                if (num1) {
                    operator = button.id;
                    display.value += ` ${button.textContent} `;
                }
                break;
            default:
                if (display.value === '') {
                    display.value = button.textContent;
                } else {
                    display.value += button.textContent;
                }
                if (operator) {
                    num2 += button.textContent;
                } else {
                    num1 += button.textContent;
                }
        }
    });
});

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'ubtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'ultiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }
    return result.toString();
}