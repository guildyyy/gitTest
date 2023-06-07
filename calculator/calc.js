

const add = (numberA, numberB) => Number(numberA)+Number(numberB);
const subtract = (numberA, numberB) => numberA-numberB;
const multiply = (numberA,numberB) => numberA * numberB;
const divide = (numberA, numberB) => numberA / numberB;

let numberA = 0;
let numberB = 0;
let operation = 0;

const operate = (numberA, numberB, operator) =>
{
    let result = 0;

    switch (operator)
    {
        case 11:
            result = divide(numberA,numberB);
            break;

        case 12:
            result = multiply(numberA,numberB);
            break;

        case 13:
            result = subtract(numberA,numberB);
            break;

        case 14:
            result = add(numberA,numberB);
            break;
    }

    return result;
};

const mainDisplay = document.getElementById('mainDisplay');


const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => editDisplay(button.dataset.value))
});

const operationBtns = document.querySelectorAll('.operationBtn');
operationBtns.forEach((button) => {
    button.addEventListener('click', () => editDisplay(button.dataset.value))
})

const divideBtn = document.getElementById('divideBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const minusBtn = document.getElementById('minusBtn');
const addBtn = document.getElementById('addBtn');

function clearBackground()
{
    operationBtns.forEach((button) => 
    {
        button.style.backgroundColor = '#737081';
    }
)}



function editDisplay(value){
    

    if (value > 10)
    {
        switch(value)
        {
            case '11':
                numberA = mainDisplay.innerText
                mainDisplay.innerText = "";
                console.log(numberA);
                divideBtn.style.backgroundColor = 'wheat';
                operation = 11;
                break;
            
            case '12':
                numberA = mainDisplay.innerText
                mainDisplay.innerText = "";
                console.log(numberA);
                multiplyBtn.style.backgroundColor = 'wheat';
                operation = 12;
                break;
            
            case '13':
                numberA = mainDisplay.innerText
                mainDisplay.innerText = "";
                console.log(numberA);
                minusBtn.style.backgroundColor = 'wheat';
                operation = 13;
                break;
            
            case '14':
                numberA = mainDisplay.innerText
                mainDisplay.innerText = "";
                console.log(numberA);
                addBtn.style.backgroundColor = 'wheat';
                operation = 14;
                break;
        }
    }
    else if (value === '10')
    {
        if (mainDisplay.innerText.includes("."))
        {
            return;
        }
        else
        {
            mainDisplay.innerText +=".";
        }
    }
    else
    {
        mainDisplay.innerText += value;
    }
    
};

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', clearAll)

function clearAll() 
{
    numberA = 0;
    numberB = 0;
    operation = 0;
    mainDisplay.innerText = "";
    clearBackground();
}

const delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', deleteOne)

function deleteOne() 
{
    if (mainDisplay.innerText.length > 0)
    {
        mainDisplay.innerText = mainDisplay.innerText.substring(0,mainDisplay.innerText.length-1);
    }
}




const equalBtn = document.getElementById('equalBtn');
equalBtn.addEventListener('click', ()=>{
    
    numberB = mainDisplay.innerText;
    
    let result = operate(numberA,numberB,operation);
    mainDisplay.innerText = result;
    console.log(result);
    clearBackground();

    
        
    
    //format results
})

window.addEventListener('keydown', (e) =>
{
    
    
    try{
        const value = document.querySelector(`div[data-key= "${e.keyCode}"]`).dataset.value;
    

        if (value < 15)
        {
            editDisplay(value);
        }
        else
        {
            numberB = mainDisplay.innerText;
        
            let result = operate(numberA,numberB,operation);
            mainDisplay.innerText = result;
            console.log(result);
            clearBackground();
        }
    }
    catch(error)
    {
        
    }
    
    

})