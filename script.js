const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const displayNum = document.querySelector('.displayNum');

let defaultMode = 0;
let firstNum = "";
let secondNum = "";
let operatorSign = "";
displayNum.textContent = defaultMode;

function checkDisplayCount(){
    displayCount = displayNum.textContent.toString().length;
    if (displayCount>19) {
        displayNum.textContent ="ERROR";
        numberBtn.forEach(button =>{
            button.onclick=()=> {displayNum.textContent ="ERROR";}
         });}
    else {
        operatorBtn.forEach(button =>{
            button.onclick=()=> {operatorButton(button.innerText)}
         });
        numberBtn.forEach(button =>{
            button.onclick=()=> {numberButton(button.innerText)}
         });
    }
};

function operatorButton(operator) {
    console.log(operator);
    switch (operator) {
        case "AC":
            displayNum.textContent = defaultMode;
            firstNum = "";
            secondNum = "";
            operatorSign = "";
            checkDisplayCount();
        break;

        case "+":
            if (firstNum === "") {
                firstNum = parseFloat(displayNum.textContent);
                operatorSign = "+";
            }
            else {
                equalSign();
                operatorSign ="+";
                console.log('hit second +');
                };
        break;

        case "-":
            if (firstNum === "") {
                firstNum = parseFloat(displayNum.textContent);
                operatorSign = "-";
            }
            else {
                equalSign();
                operatorSign ="-";
                console.log('hit second -');
                };
        break;
        
        case "x":
            if (firstNum === "") {
                firstNum = parseFloat(displayNum.textContent);
                operatorSign = "x";
            }
            else {
                equalSign();
                operatorSign ="x";
                console.log('hit second x');
                };
        break;

        case "÷":
            if (firstNum === "") {
                firstNum = parseFloat(displayNum.textContent);
                operatorSign = "÷";
            }
            else {
                equalSign();
                operatorSign ="÷";
                console.log('hit second ÷');
                };
        break;

        case "-/+":
            displayNum.textContent = displayNum.textContent*-1;
        break;

        case "%":
            displayNum.textContent = displayNum.textContent/100;
        break;

        case "=":
            equalSign();
            firstNum = "";
        break; 
    }
};
let displayCount;
function numberButton(number) {
    console.log(number);
    if (parseFloat(displayNum.textContent) === 0) {
        displayNum.textContent = "";
    }
    else if(parseFloat(firstNum) === parseFloat(displayNum.textContent) ){
        displayNum.textContent = "";
    }
    displayNum.textContent += number;
    checkDisplayCount() 
};

function equalSign(){
    secondNum = parseFloat(displayNum.textContent); 
        if (secondNum === 0) {
            displayNum.style.fontSize="24px";
            displayNum.textContent = "CAN'T DIVIDE BY ZERO";
            console.log('YOU CANT DIVIDE BY ZERO');
        }
        else if (firstNum !== "" && secondNum !== "" && operatorSign !==""){
            operate(firstNum,secondNum,operatorSign);
            firstNum = displayNum.textContent; 
            secondNum = "";
        }    
        else {
            console.log('ERROR First, Second, and operator "" ');
        }
}
function operate(num1,num2,operator){
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '÷':
            result = num1 / num2;
            break;
        default:
            console.log(`Sorry that's not an operator`)
    }
    result = parseFloat(result.toFixed(3));
    console.log(result);
    displayNum.textContent = result;
    checkDisplayCount()
    return result;
}
 window.onload = () => { 
 checkDisplayCount();    
 }