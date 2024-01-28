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
let operatorIndex;
let array = [];

function showInOutput(e){
    const output = document.querySelector('output');
    const buttonPressed = e.target;
    const text = document.createTextNode(buttonPressed.textContent);
    
    function clearOutput(){
        output.textContent = '0';
        firstNum = 0;
        secondNum = 0;
        operator = "";
    }
    
    if(buttonPressed.className === 'digit' || buttonPressed.id === 'point'){
        if(output.textContent == 0) {
            output.textContent = "";
        }
        output.appendChild(text);

    }
    if(buttonPressed.className === 'operator'){
        
        if(buttonPressed.textContent == '-'){
            if(output.textContent == '0'){
                output.textContent = '-';
                console.log(true);
            }
            else{
                output.appendChild(text);
                operator = buttonPressed.textContent;
                operatorIndex = output.textContent.lastIndexOf(operator);
                console.log(operatorIndex);
            }
        }  
        else{
            output.appendChild(text);
            operator = buttonPressed.textContent; 
            operatorIndex = output.textContent.indexOf(operator);
        } 
      
    }   
   
    if(buttonPressed.id === 'equal'){
       
        if(operator === "" || output.textContent == firstNum) {
            array.push(output.textContent)
            firstNum = parseFloat(array.shift());
            output.textContent = firstNum;
            console.log(firstNum);

        } else{
            firstNum = parseFloat(output.textContent.slice(0, operatorIndex));
            console.log(firstNum);
            secondNum = parseFloat(output.textContent.slice(operatorIndex+1));
            console.log(secondNum);
            output.textContent = operate(firstNum,operator,secondNum);
            firstNum = parseFloat(output.textContent);
        }
     } else if(buttonPressed.id === 'clear'){     
         clearOutput()
         

     }
     
}

const btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', showInOutput);
    
});