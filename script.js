// Спрашиваем мат. операцию + - * / // -
// Валидируем
// Спрашиваем сколько чисел нужно считать // 3 >=2
// Валидируем
// Спрашиваем число 1 // 2
// Валидируем
// Спрашиваем число 2 // 3
// Валидируем
// ....
// Спрашиваем число N // 5
// Валидируем


//Выводим результат
// 2 - 3 -5 = -6

const action = getAction();
const operandsNumber = getOperandsNumber(); 
const resultExpression = getExpression(operandsNumber, action);
showResult(resultExpression);

function getAction() {
    let action = prompt('Please enter the action');

    while (isActionInvalid(action)) {
        action = prompt('Please enter the action');
    }

    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/';
}

function getOperandsNumber() {
    return getNumber('Please enter the number of operands', isOperandsNumberInvalid);
}

function isOperandsNumberInvalid(num) {
    return isNumberInvalid(num) || num < 2;
}

function getOperand(title) {
    return getNumber(title, isOperandInvalid);
}

function isOperandInvalid(operand) {
    return isNumberInvalid(operand);
}

function getNumber(title, validationFn) {
    let operand = prompt(title);

    while (validationFn(operand)) {
        operand = prompt(title);
    }

    return +operand;
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val);
}

function getExpression(count, operation) {
    let result = getOperand('Operand 1');
    let expression = result;

    for (let i = 2; i <= count; i++) {
        const operand = getOperand('Operand ' + i);

        result = calculate(result, operand, operation);
        expression += ` ${operation} ${operand}`;
    }

    // 2 + 3 + = 5
    return `${expression} = ${result}`;
}

function calculate(a, b, action) {
    switch (action) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            alert('Something went wrong');
    }
}

function showResult(expression) {
    alert(expression);
}