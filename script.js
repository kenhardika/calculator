const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const displayNum = document.querySelector('.displayNum');

let defaultMode = 0;
let firstNum = "";
let secondNum = "";
let operatorSign = "";
displayNum.textContent = defaultMode;


operatorBtn.forEach(button =>{
    button.onclick=()=> {operatorButton(button.innerText)}
 });
numberBtn.forEach(button =>{
    button.onclick=()=> {numberButton(button.innerText)}
 });


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

        case "-/+":
            displayNum.textContent = displayNum.textContent*-1;
            // if (firstNum === "") {
            //     firstNum = parseFloat(displayNum.textContent);
            //     operatorSign = "-/+";
            //     equalSign();
            //     firstNum="";
            // }
            // else if (firstNum!=="" && secondNum === "") {
            //     operatorSign = "-/+";
            //     equalSign();
            //     console.log('hit second num neg');
            // }
            // else {
            //     //equalSign();
            //     operatorSign ="-/+";
            //     equalSign();
            //     firstNum="";
            //     console.log('hit second -/+');
            //     };
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

function equalSign(){
    secondNum = parseFloat(displayNum.textContent); 
        if (secondNum === 0) {
            console.log('YOU CANT DIVIDE BY ZERO');
        }
        else if (firstNum !== "" && secondNum !== "" && operatorSign !==""){
            operate(firstNum,secondNum,operatorSign);
            firstNum = displayNum.textContent; 
            // secondNum = firstNum;
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
        // case '-/+':
        //     result = (displayNum.textContent) * -1
        //     break;
        default:
            console.log(`Sorry that's not an operator`)
    }
    result = parseFloat(result.toFixed(3));
    console.log(result);
    displayNum.textContent = result;
    
    return result;
}


// window.onload = () => { 
//     
// }