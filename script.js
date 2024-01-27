function add(firstNum, secondNum) {
    return +firstNum + +secondNum;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum){
    return firstNum * secondNum;
}

function divide(firstNum, secondNum){
    if(secondNum == 0) return 'Divided by 0 error';
    return firstNum/secondNum;
}

function operate(firstNum, operator, secondNum){
    switch (operator) {
        case '+':  
            return add(firstNum, secondNum);

        case '-':
            return subtract(firstNum,secondNum);
            
        case '*':
            return multiply(firstNum, secondNum);
        
        case '/': 
            return divide(firstNum, secondNum);

        default:
            break;
    }
} 
let firstNum = 3;
let secondNum = 3;
let operator = '-';

console.log(operate(firstNum, operator, secondNum));