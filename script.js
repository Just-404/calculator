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

function showInOutput(e){
    let buttonPressed = e.target;
    const text = document.createTextNode(buttonPressed.textContent);
    
    if(buttonPressed.className === 'digit'){
        output.appendChild(text);
    }
    else if(buttonPressed.className === 'operator'){
        firstNum = parseInt(output.textContent);
        output.appendChild(text);
        operator = output.textContent.replace(/[0-9]/g, '').trim();
       
    } 
    if(buttonPressed.id === 'equal'){
        let array = output.textContent.split(operator);
        secondNum = parseInt(array.pop())


    }
}

const output = document.querySelector('output');
const btn = document.querySelectorAll('button');

let firstNum = 3;
let secondNum = 3;
let operator = '-';

let operation = [];

btn.forEach(btn => {
    btn.addEventListener('click', showInOutput);

});

console.log(operate(firstNum, operator, secondNum));