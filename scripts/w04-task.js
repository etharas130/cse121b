/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Brenin Peterson",
    photo: "images/brenindpeterson.png",
    favoriteFoods: [
        'Pasta',
        'Steak',
        'Asparagus',
        'Salad',
        'Burgers'
    ],
    hobbies: [
        'Family Time',
        'Video Games',
        'Dungeon & Dragons',
        'Walking'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Soda Springs, ID',
        length: '10 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Kingman, AZ',
        length: '6 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Spanish Fort, AL',
        length: '3 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Las Vegas, NV',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Hickory, NC',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '6 years'
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('img');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', 'Profile of ' + myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach( food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach( hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */

let placesLivedElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {    
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = `${place.length} years`;

    placesLivedElement.appendChild(dtElement);
    placesLivedElement.appendChild(ddElement);
});