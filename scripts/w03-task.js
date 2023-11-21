/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (addNumber1, addNumber2){
    let addNumber1 = Number(document.querySelector('add1').value);
    let addNumber2 = Number(document.querySelector('add2').value);

    document.querySelector('sum').value = add(addNumber1, addNumber2);
}

document.querySelector('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
  };

  const subtractNumbers = function (subNumber1, subNumber2) {
    let subNumber1 = Number(document.querySelector('subtract1').value);
    let subNumber2 = Number(document.querySelector('subtract2').vlaue);

    document.querySelector('difference').vlaue = subtract(subNumber1, subNumber2);
  };

  document.querySelector('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
multiply = (number1, number2) => number1 * number2;

multiplyNumbers = (multiplyNum1, MultiplyNum2) => {
    let multiplyNum1 = Number(document.querySelector('factor1').value);
    let MultiplyNum2 = Number(document.querySelector('factor2').value);

    document.querySelector('product').value = multiply(multiplyNum1, MultiplyNum2);
}

document.querySelector('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    return number1 / number2;
}

function divideNumbers (divideNumber1, divideNumber2){
    let divideNumber1 = Number(document.querySelector('dividend').value);
    let divideNumber2 = Number(document.querySelector('divisor').value);

    document.querySelector('quotient').value = add(divideNumber1, divideNumber2);
}

document.querySelector('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('getTotalDue').addEventListener('click', calculateTotal);

function calculateTotal() {
    const subtotalInput = document.getElementById('subtotal');
    const subtotal = parseFloat(subtotalInput.value) || 0; // if not a valid number, default to 0


    const membershipCheckbox = document.getElementById('membership');
    const applyDiscount = membershipCheckbox.checked;

 
    const discountPercentage = applyDiscount ? 0.15 : 0;
    const discountedTotal = subtotal - (subtotal * discountPercentage);

    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `Total Due: $${discountedTotal.toFixed(2)}`;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

document.getElementById('array').textContent = `Array: [${numbersArray.join(', ')}]`;
/* Output Odds Only Array */

const oddsArray = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').textContent = `Odd Numbers: [${oddsArray.join(', ')}]`;

/* Output Evens Only Array */
const evensArray = numbersArray.filter(number => number % 2 === 0);

document.getElementById('evens').textContent = `Even Numbers: [${evensArray.join(', ')}]`;

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);

document.getElementById('sumOfArray').textContent = `Sum of Array: ${sumOfArray}`;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);

document.getElementById('multiplied').textContent = `Multiplied by 2: [${multipliedArray.join(', ')}]`;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((acc, num) => acc + num, 0);

document.getElementById('sumOfMultiplied').textContent = `Sum of Multiplied: ${sumOfMultiplied}`;
