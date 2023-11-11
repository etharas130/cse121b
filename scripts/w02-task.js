/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Brenin Peterson';

let currentYear = new Date().getFullYear();

let profilePicture = 'images\brenindpeterson.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>${fullName}</strong>';

currentYear.innerHTML = '${currentYear}';

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', 'Profile Image of ${profilePicture}');
/* Step 5 - Array */

let favFoods = ['Pasta', 'Steak','Asparagus','Burgers'];

foodElement.textContent = '${favFoods}';

let oneFavFood = 'Chicken';

favFoods.push(oneFavFood);

foodElement.textContent += '<br>${favFoods}';

favFoods.shift();

foodElement.textContent += '<br>${favFoods}';

favFoods.pop();

foodElement.textContent += '<br>${favFoods}';



