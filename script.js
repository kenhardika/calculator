const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const displayNum = document.querySelector('.displayNum');
// const clearBtn = document.getElementById('clear');
let defaultMode = 0;
displayNum.textContent = defaultMode;

// clearBtn.onclick = ()=> { changeMode('clear');}
// numberBtn.onclick = ()=> { changeMode('clicked number'); }

// function clearing() {
// console.log('clearing display');
// // }
// function changeMode(modeNow){
// defaultMode = modeNow;
// console.log(defaultMode)
// }

operatorBtn.forEach(button =>{
    button.onclick=()=> {operatorButton(button.innerText)}
 });
numberBtn.forEach(button =>{
    button.onclick=()=> {numberButton(button.innerText)}
 });
let firstNum = "";
let secondNum = "";
let operatorSign = "";
function operatorButton(operator) {
    console.log(operator);
    switch (operator) {
        case "AC":
            displayNum.textContent = defaultMode;
            firstNum = "";
            secondNum = "";
            operatorSign = "";
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

        case "=":
            equalSign();
            firstNum = "";
        break; 
    }
};



function numberButton(number) {
    console.log(number);
    if (parseFloat(displayNum.textContent) === 0) {
        displayNum.textContent = "";
    }
    else if(parseFloat(firstNum) === parseFloat(displayNum.textContent) ){
        displayNum.textContent = "";
    }
    displayNum.textContent += number;   
};

//normal equal and equal with operator is DIFFERERNT!
function equalSign(){
    secondNum = parseFloat(displayNum.textContent); 
        if (secondNum === 0) {
            console.log('YOU CANT DIVIDE BY ZERO');
        }
        else if (firstNum !== "" && secondNum !== "" && operatorSign !==""){
            operate(firstNum,secondNum,operatorSign);
            secondNum = firstNum;
            secondNum = "";
        }    
        else {
            console.log('ERROR First, Second, and operator "" ');
        }
}
function operate(num1,num2,operator){
   //console.log(num1 + num2 + operator);
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
    firstNum = result; 
    displayNum.textContent = firstNum;
    return result;
}


// window.onload = () => { 
//     
// }