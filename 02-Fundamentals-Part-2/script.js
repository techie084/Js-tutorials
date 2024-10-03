// ALWAYS USE STRICT MODE
"use strict";

/*
let hasDriverLicense = false;
const pastTest = true;

if (pastTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("i can drive :D");

// const interface = "true";
// const private = 534;


/////////////
// FUNCTION
////////////

function logger() {
  console.log("My name is Wisdom");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessors(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessors(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");


// FUNCTION DECLARATION
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1991);

// FUNCTION EXPRESSION
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calAge2(1991);

console.log(age1, age2);


///////////////////////////
// ARROW FUNCTION
//////////////////////////
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement; 
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "jonas"));
console.log(yearUntilRetirement(1980, "Bob"));


// FUNCTION CALLING OTHER FUNCTION
function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(2005, "Wisdom"));


/////////////////////////////
// CODING CHALLENGE 1
////////////////////////////

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65 + 54 + 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No Teams Wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//////////////////////////////
//          ARRAYS
/////////////////////////////

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtman", 2037 - 1991, "Teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1964, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


//////////////////////
// ARRAYS METHODS
/////////////////////

const friends = ["Micheal", "Steven", "Peter"];

// push method add an element to the end of an array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// unshift methods add an element to the beginning of an array
friends.unshift("John");
console.log(friends);

// pop method is the opposite of push 👆
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// shift is the opposite of unshift 👆
friends.shift();
console.log(friends);

// indexof tell us in which position a certain element is in the array
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes return true if it in the array and false if it is not
// this works as a strict equality and does not do type coercion
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.indexOf(23));

if (friends.includes("Steven")) {
  console.log("You have a friends named Steven 😁");
}


/////////////////////////
// CODING CHALLENGE 2
////////////////////////

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


////////////////////////
// OBJECTS
///////////////////////
const wisdomArrays = [
  "Wisdom",
  "Matthew",
  2005 - 2024,
  "Student",
  ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
];

// OBJECTS 
// the difference between objects and arrays 
const Emediong = {
  firstNAme: "Wisdom",
  lastName: "Matthew",
  age: 2005 - 2024,
  job: "Programmer",
  friends: ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
};


////////////////////////////
// DOT VS BRACKET NOTATION
////////////////////////////

const emediong = {
  firstName: "Wisdom",
  lastName: "Matthew",
  age: 2005 - 2024,
  job: "Programmer",
  friends: ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
};
console.log(emediong);

// DOT NOTATION
console.log(emediong.lastName);

// BRACKET NOTATION
console.log(emediong["lastName"]);

const nameKey = "Name";
console.log(emediong["first" + nameKey]);
console.log(emediong["last" + nameKey]);

// how to retrieve data from an object
const interestedIn = prompt(
  "What do you want to know about emediong? Choose between firstName, lastName, Age, Job, Friends"
);

if (emediong[interestedIn]) {
  console.log(emediong[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, Age, Job, Friends"
  );
}

// how to add new property to a object
emediong.location = "Lagos";
emediong["Twitter"] = "@Techie084";
console.log(emediong);

// CHALLENGE
// "emediong has 3 friends, and his best friend is Femi"

console.log(
  `${emediong.firstName} has ${emediong.friends.length} friends, and his best friend is called ${emediong.friends[0]}`
);


///////////////////////
// OBJECT METHODS
//////////////////////

const emediong = {
  firstName: "Wisdom",
  lastName: "Matthew",
  birthYear: 2005,
  job: "Programmer",
  friends: ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  // calcAge: function () {
  //   this.age = 2037 - this.birthYear;
  //   return this.age;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "No"} driver's License`;
  },
};

console.log(emediong.calcAge(2005));

console.log(emediong.age);
console.log(emediong.age);
console.log(emediong.age);

// CHALLENGE
console.log(emediong.getSummary());


///////////////////////////
// CODING CHALLENGE 3
//////////////////////////

// Mark BMI
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// John BMI
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}


////////////////////////////
// LOOPS (FOR LOOPS)
////////////////////////////

// for loops keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting Weight's Repetition ${rep} 🏋️`);
}

////////////////////////////////
// LOOPING THROUGH AN ARRAY
////////////////////////////////

const Wisdom = [
  "Wisdom",
  "Matthew",
  2005 - 2024,
  "Student",
  ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
  true,
];
const types = [];

// console.log(Wisdom[0]);
// console.log(Wisdom[1]);
// ...
// console.log(Wisdom[4]);
// Wisdom[5] does not exist

for (let i = 0; i < Wisdom.length; i++) {
  // Reading the wisdom array
  console.log(Wisdom[i], typeof Wisdom[i]);

  // filling an array
  // types[i] = typeof Wisdom[i];
  types.push(typeof Wisdom[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// CONTINUE AND BREAK STATEMENT
// CONTINUE
console.log(" --- ONLY STRINGS --- ");
for (let i = 0; i < Wisdom.length; i++) {
  if (typeof Wisdom[i] !== "string") continue;

  console.log(Wisdom[i], typeof Wisdom[i]);
}

// BREAK
console.log(" --- BREAKS WITH NUMBER --- ");
for (let i = 0; i < Wisdom.length; i++) {
  if (typeof Wisdom[i] === "number") break;

  console.log(Wisdom[i], typeof Wisdom[i]);
}


//////////////////////////////////////////
// LOOPING BACKWARD AND LOOPS IN LOOPS
/////////////////////////////////////////

const Wisdom = [
  "Wisdom",
  "Matthew",
  2005 - 2024,
  "Student",
  ["Femi", "Omolara", "Anike", "Emediong", "Matthew", "Joy"],
];

for (let i = Wisdom.length - 1; i >= 0; i--) {
  console.log(i, Wisdom[i]);
}

// CREATING A LOOP INSIDE OF A LOOP
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----STARTING EXERCISE ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight's repetition ${rep} 🏋️ `);
  }
}


/////////////////
// WHILE LOOP
/////////////////
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting Weight's Repetition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting Weight's Repetition ${rep} 🏋️`);
  rep++;
}

// creating a random number
let dice = Math.trunc(Math.random() * 6) + 1;

// creating a while loops
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end....`);
  }
}
*/

///////////////////////////////
// CODING CHALLENGE 4
//////////////////////////////
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(bills[i]);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Long hand
    // sum = sum + arr[i]
    // Short Hand
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2,3,6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


