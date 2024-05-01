'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,

  //   openingHours: {
  //     thu: {
  //       open: 12,
  //       close: 22,
  //     },
  //     fri: {
  //       open: 11,
  //       close: 23,
  //     },
  //     sat: {
  //       open: 0, // Open 24 hours
  //       close: 24,
  //     },
  //   },
};

/*


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter + ', ' + mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Property NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}

*/

// STRINGS part 01

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// create substring
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// get first word
console.log(airline.slice(0, airline.indexOf(' ')));
// get last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// counting from the end
console.log(airline.slice(-8));
// slice from both sides (beginning & end)
console.log(airline.slice(4, -9));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Hochmajer')); // WHAT JS DOES BEHIND THE SCENES WHEN CALLING METHODS ON STRINGS
console.log(typeof new String('Hochmajer')); // OBJECT
console.log(typeof new String('Hochmajer').slice(1)); // STRING

// STRINGS part 02

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'hOchMajEr'; // Hochmajer
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Fix capitalization of a name :: FUNCTION;

const fixCapitalizationName = function (string) {
  const corrected = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return corrected;
};

console.log(fixCapitalizationName('hOchMajEr'));

// Comparing emails

const email = 'hello@hochmajer.dev';
const loginEmail = ' Hello@Hochmajer.Dev \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// Comparing emails :: FUNCTION;

const compareEmails = function (s1, s2) {
  const normalize = s => s.toLowerCase().trim();
  const isSame = normalize(s1) === normalize(s2);
  return isSame;
};

if (compareEmails(email, loginEmail)) console.log('correct');
else console.log('wrong email');

// Replacing

const priceGB = '288,97Ł';
const priceUS = priceGB.replace('Ł', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// Replacing with regular expression
console.log(announcement.replace(/door/g, 'gate'));

// Booleans [INCLUDES, STARTSWITH, ENDSWITH]

const newplane = 'Airbus A320neo';
console.log(newplane.includes('A320'));
console.log(newplane.includes('Boeing'));
console.log(newplane.startsWith('Air'));
console.log(newplane.endsWith('neo'));

if (newplane.startsWith('Airbus') && newplane.endsWith)
  console.log('Part of the NEW Airbus family');

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are NOT allowed on board');
  else console.log('Welcome aboard!');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// STRINGS part 03

//  SPLIT and JOIN

console.log('a+very+nice+string'.split('+'));
console.log('Lesan Hochmajer'.split(' '));

const [firstName, lastName] = 'Lesan Hochmajer'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log(typeof newName);

// split and join function
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const passenger2 = 'jessica ann smith davis';

capitalizeName(passenger2);
capitalizeName('hoch majer');
capitalizeName('Mr Lesan hochmajer');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Hochmajer'.padStart(25, '+').padEnd(30, '-'));

// Padding in a REAL WORLD EXAMPLE FUNCTION
const maskCreditCard = function (number) {
  const str = number + ''; // converts to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(8888999943445678));
console.log(maskCreditCard('1234123412341234'));
console.log(maskCreditCard(12341234));

// Repeat

const message2 = 'Bad Weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5);
planesInLine(12);
