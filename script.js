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
        break;
        case "+":
            if (firstNum === "") {
            firstNum = displayNum.textContent;
            operatorSign = operator;
            //console.log();
            }
                else {
                    secondNum = displayNum.textContent; 
                };
        break;
        case "=":
            secondNum = displayNum.textContent; 
            if (firstNum !== "" && secondNum !== "" && operator !== ""){
                operate(firstNum,secondNum,operatorSign);
                secondNum = firstNum;
                secondNum = "";
                operatorSign = "";
            }    
            else {
                console.log('ERROR First, Second, and operator "" ');
            } 
    }


};
function numberButton(number) {
    console.log(number);
    if (displayNum.textContent === "0") {
        displayNum.textContent = "";  
        displayNum.textContent += number;
    }
    else if( firstNum!=="" ){
        displayNum.textContent = "";
        displayNum.textContent += number;
    }
};




function operate(num1,num2,operator){
console.log(num1 + num2 + operator);
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
firstNum = result;
displayNum.textContent = result;
return result;
}


// window.onload = () => { 
//     
// }