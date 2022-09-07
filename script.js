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

let action = prompt('Enter action');
let result;
let showResult = '';

while(isSignValid(action)) {
    action = prompt(`Enter action`);
}

let amountOfNumbers = prompt(`Enter the amount of numbers`);

while(isNumberInvalid(amountOfNumbers) || amountOfNumbers < 2) {
    amountOfNumbers = prompt(`Enter the amount of numbers`);
}

for(var i = 0; i < amountOfNumbers; i++) {
    let number = prompt(`Enter ${i} only numbers`);
}

while(isNumberInvalid(number)) {
    number = prompt(`Enter ${i} only numbers`);
}

number = +number;

switch(i) {
    case 0: 
    result = number;
    showResult += `${number}`;
    break;
    default: showResult += ` ${action} ${number}`;
}

actionCalc(number);

switch(i) {
    case amountOfNumbers - 1:
    showResult += ` = ${result}`;
}

console.log(showResult);

function isNumberInvalid(val) {
    return val === null || val.trim() === "" || isNaN(val) || val <= 0;
}

function isSignValid(act) {
    return act !== "+" && act !== "-" && act !== "/" && act !== "*";
}

function actionCalc(number){
    switch(true){
        case (i > 0): switch(action){
            case "+": result += number;
            break;
            case "-": result -= number;
            break;
            case "*": result *= number;
            break;
            default: result /= number;
        }
    }
}