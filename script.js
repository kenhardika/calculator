const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const displayNum = document.querySelector('.displayNum');
let firstNum = "";
let secondNum = "";
let operatorSign = "";
displayNum.textContent = 0;
let displayCount;


function checkDisplayCount(){
    displayCount = displayNum.textContent.toString().length;
    //console.log( "display count = " +displayCount);
    if (displayCount>16) {
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
    //console.log(operator);
    switch (operator) {
        case "AC":
            resetDisplay();
        break;

        case "+":
            if (firstNum === "") {
                firstNum = parseFloat(displayNum.textContent);
                operatorSign = "+";
            }
            else {
                equalSign();
                operatorSign ="+";
      //          console.log('hit second +');
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
        //        console.log('hit second -');
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
          //      console.log('hit second x');
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
            //    console.log('hit second ÷');
                };
        break;

        case "-/+":
            displayNum.textContent = displayNum.textContent*-1;
        break;

        case "%":
            displayNum.textContent = displayNum.textContent/100;
        break;

        case "C":
            resetDisplay();
        break;
        case ".":
            commaSign(operator);
        break;
        case "=":
            equalSign();
            firstNum = "";
        break; 
        default:
        break;
    }
};

function resetDisplay(){
    displayNum.textContent = 0;
    firstNum = "";
    secondNum = "";
    operatorSign = "";
    checkDisplayCount();
    checkDisplayForBackspace(); 
}

function numberButton(number) {
   // console.log(number);
    if (parseFloat(displayNum.textContent) === 0 && displayCount === 1) {
        displayNum.textContent = "";
    }
    else if(parseFloat(firstNum) === parseFloat(displayNum.textContent) ){
        displayNum.textContent = "";
    }
    displayNum.textContent += number;
    checkDisplayCount();
    checkDisplayForBackspace(); 
};

function commaSign(dot){
        if( firstNum ==="" || secondNum ==="" ){
            //displayNum.textContent = 0;
            displayNum.textContent += dot;
        }
        else if( !displayNum.textContent.includes(dot) ){
            displayNum.textContent += dot;
        }
        checkDisplayCount();
}
function equalSign(){
    secondNum = parseFloat(displayNum.textContent); 
        if (secondNum === 0) {
            displayNum.style.fontSize="24px";
            displayNum.textContent = "ERROR";
     //       console.log('YOU CANT DIVIDE BY ZERO');
        }
        else if (firstNum !== "" && secondNum !== "" && operatorSign !==""){
            operate(firstNum,secondNum,operatorSign);
            firstNum = displayNum.textContent; 
            secondNum = "";
        }    
        else {
      //      console.log('ERROR First, Second, and operator "" ');
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
        //    console.log(`Sorry that's not an operator`)
            break;
    }
    result = parseFloat(result.toFixed(4));
    //console.log(result);
    displayNum.textContent = result;
    checkDisplayCount();
    checkDisplayForBackspace();
    return result;
}

function backspace() {
    let display = Array.from(displayNum.textContent);
        if (displayCount > 1) {
            display.pop();
            displayNum.textContent = display.join("");
            checkDisplayCount();
        }
        else if (displayCount == 1 ) {
            displayNum.textContent = 0;
            checkDisplayForBackspace();
        }
};

function checkDisplayForBackspace(){
    let clear = document.getElementById('clear');
    if (displayCount > 1) {
        //console.log('this is should be c')
        clear.innerText = "C";   
    }
    else if(displayCount == 1){
       // console.log('hit should change AC')
        clear.innerText = "AC";  
    }
};

function keyPress(e){
    if(displayCount>16){ 
      //  console.log("hit keypress error");
        return
    }
    else if (e.keyCode == 8 ) {
        backspace();
    }
    else{
        const key = document.querySelector(`[data-keys="${e.keyCode}"]`);
        //const op = document.querySelector(`[data-op="${e.keyCode}"]`);
        //console.log(key.textContent);
        numberButton(key.textContent);
        //operatorButton(op.textContent);
    }
};
window.addEventListener('keydown', keyPress);


 window.onload = () => { 
 checkDisplayCount(); 
 checkDisplayForBackspace();   
 }