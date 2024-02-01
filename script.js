const btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', showInOutput);
    
});

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

function doOperation(firstNum, operator, secondNum, output){
    let result =  operate(firstNum, operator, secondNum);
    
    if(typeof result === "string"){
        output.textContent = result;
        return result;
    }else{
       result = Math.round(operate(firstNum, operator, secondNum) * 10000000) / 10000000;
       output.textContent = result;
       return result;
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
    const pointBtn = document.querySelector('#point');

    function clearOutput(){
        output.textContent = '0';
        firstNum = undefined;
        secondNum = undefined;
        operator = undefined;
        btnOperatorClicked = false;
        secondNumTurn = false;
        pointBtn.setAttribute('style', 'pointer-events: auto;')
    }
    
    if(buttonPressed.className === 'digit' || buttonPressed.id === 'point'){
        if(firstNum === undefined) {
            
            if(output.textContent.includes('-')) {
                output.textContent = "";
                output.textContent = '-';

            } else if(output.textContent == 0 && buttonPressed.id === 'point'){
                output.textContent = '0';
            } 
            else {
                output.textContent = "";
            }
            output.appendChild(text);
            firstNum = parseFloat(output.textContent);
        }

        else if(btnOperatorClicked){
            if(btnOperatorClicked && secondNumTurn){
                output.textContent = "";
                secondNumTurn = false;
                pointBtn.setAttribute('style', 'pointer-events: auto;')
            }
            output.appendChild(text);
            secondNum = parseFloat(output.textContent);
            
        }
        else if(!btnOperatorClicked){
            output.appendChild(text);
            firstNum = parseFloat(output.textContent);
        }
        
        if(buttonPressed.id === 'point'){
            
            if(output.textContent.includes('.')){
                pointBtn.setAttribute('style', 'pointer-events: none;')
            } 
            else{
                pointBtn.setAttribute('style', 'pointer-events: auto;')
            }
        
        }
    }

    if(buttonPressed.className === 'operator'){

        if(firstNum !== undefined && secondNum !== undefined){
            firstNum = doOperation(firstNum, operator, secondNum, output);
            secondNum = undefined;

        } else if(!output.textContent.includes('.')){
            pointBtn.setAttribute('style', 'pointer-events: auto;')
        }
        
        operator = buttonPressed.textContent;
        btnOperatorClicked = true;
        secondNumTurn = true;
    }   
   
    if(buttonPressed.id === 'equal'){
       
        if(btnOperatorClicked === false || output.textContent == firstNum && secondNum === undefined) {
             output.textContent = firstNum;
        }
        if(firstNum && secondNum){
            firstNum = doOperation(firstNum, operator, secondNum, output);
            secondNum = undefined;
        }
        if(!output.textContent.includes('.')){
            pointBtn.setAttribute('style', 'pointer-events: auto;')
        }         
        

    }
    if(buttonPressed.id === 'change-sign'){
        if(output.textContent.includes('-')){
            output.textContent = output.textContent.replace('-', '');
            firstNum = output.textContent;
        }else{
            output.textContent = output.textContent.padStart(output.textContent.length + 1, '-');
            firstNum = output.textContent;
        }
        
    }
    if(buttonPressed.id === 'clear'){     
         clearOutput();
     }
     
}

