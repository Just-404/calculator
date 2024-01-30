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
let firstNum;
let secondNum;
let operator = "";
let btnOperatorClicked = false;
let secondNumTurn = false;

function showInOutput(e){
    const output = document.querySelector('output');
    const buttonPressed = e.target;
    const text = document.createTextNode(buttonPressed.textContent);
    const changeSign = document.querySelector('#changeSign');

    function clearOutput(){
        output.innerText = '0';
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
        btnOperatorClicked = false;
        secondNumTurn = false;

    }
    
    if(buttonPressed.className === 'digit' || buttonPressed.id === 'point'){
        if(firstNum === undefined) {
            
            if(output.innerText.includes('-')) {
                output.textContent = "";
                output.innerText = '-';

            } else output.innerText = "";
            output.appendChild(text);
            firstNum = parseFloat(output.innerText);
        }

        else if(btnOperatorClicked){
            if(btnOperatorClicked && secondNumTurn){
                output.textContent = "";
                secondNumTurn = false;
            }
            output.appendChild(text);
            secondNum = parseFloat(output.innerText);
            
        }
        else if(!btnOperatorClicked){
            
            output.appendChild(text);
            firstNum = parseFloat(output.innerText);
        }
        
    }
    if(buttonPressed.className === 'operator'){
        operator = buttonPressed.innerText;
        btnOperatorClicked = true;
        secondNumTurn = true;
    }   
   
    if(buttonPressed.id === 'equal'){
       
         if(btnOperatorClicked === false || output.textContent == firstNum) {
             output.textContent = firstNum;
        }
        if(btnOperatorClicked === true){
            output.innerText =  Math.round(operate(firstNum,operator,secondNum) * 10000000)/10000000;
            firstNum = output.innerText;
            secondNum = 0;
        }          
        

    }
    if(buttonPressed.id === 'change-sign'){
        if(output.innerText.includes('-')){
            output.innerText = output.innerText.replace('-', '');
            firstNum = output.innerText;
        }else{
            output.innerText = output.innerText.padStart(output.innerText.length + 1, '-');
            firstNum = output.innerText;
        }
        
    }
    if(buttonPressed.id === 'clear'){     
         clearOutput();
     }
     
}

const btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', showInOutput);
    
});