/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (addNumber1, addNumber2){
    addNumber1 = Number(document.querySelector('#add1').value);
    addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
 let subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  let subtractNumbers = function (subNumber1, subNumber2) {
    subNumber1 = Number(document.querySelector('#subtract1').value);
    subNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
  };

  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2;

multiplyNumbers = (multiplyNum1, multiplyNum2) => {
    multiplyNum1 = Number(document.querySelector('#factor1').value);
    multiplyNum2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNum1, multiplyNum2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}

function divideNumbers (divideNumber1, divideNumber2){
    divideNumber1 = Number(document.querySelector('#dividend').value);
    divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', calculateTotal);

function calculateTotal() {
    let subtotalInput = document.querySelector('#subtotal');
    let subtotal = parseFloat(subtotalInput);
    let membershipCheck = document.querySelector('#membership');
    if (membershipCheck == true) {
        let discountedTotal = subtotal - (subtotal * .15);
    } else {
        discountedTotal = subtotal;
    }
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `$${discountedTotal.toFixed(2)}`;
}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

document.getElementById('array').textContent = `[${numbersArray.join(', ')}]`;

/* Output Odds Only Array */

const oddsArray = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').textContent = `[${oddsArray.join(', ')}]`;

/* Output Evens Only Array */
const evensArray = numbersArray.filter(number => number % 2 === 0);

document.getElementById('evens').textContent = `[${evensArray.join(', ')}]`;

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);

document.getElementById('sumOfArray').textContent = `${sumOfArray}`;

/* Output Multiplied by 2 Array */

const multipliedArray = numbersArray.map(number => number * 2);

document.getElementById('multiplied').textContent = `[${multipliedArray.join(', ')}]`;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((acc, num) => acc + num, 0);

document.getElementById('sumOfMultiplied').textContent = `${sumOfMultiplied}`;
