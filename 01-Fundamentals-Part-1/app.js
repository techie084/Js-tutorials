/* let js = "amazing"; // js is a variable and amazing is the value of the variable
console.log(40 + 8 + 23 - 10);

console.log("Wisdom");
console.log(19);

let firstName = "Emediong";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// CONVENTIONS AND RULES FOR NAMING VARIABLE
// VARIABLE NAMING CONVENTION 
let Wisdom_Anike="WA";
let $function = 27;

let person = "Wisdom";
let PI = 3.1415;

let myFirstJob = "Graphic-Designer";
let myCurrentJob = "Programmer";

let job1 = "teacher";
let job2 = "Programmer";

console.log(myFirstJob);

//////////////////////////
// DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(23);
// console.log(typeof "wisdom");

//creating a Dynamic typing in javaScript
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2005;
console.log(typeof year);

console.log(typeof null);

///////////////////////////////
// WAYS OF DECLARING VARIABLE
// LET, CONST, VAR
let age = 19;
age = 20;

const birthYear = 2005;
// birthYear = 2004;
// const job ;

var job = "programmer"
job = "teacher"

lastName = "Matthew"
console.log(lastName);

////////////////////////////////
// Basic Operators  
// Math Operators
const now = 2037;
const ageJonas = now - 2024;
const ageSarah = now - 2024;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2 * 2 * 2

const firstName = "Wisdom";
const lastName = "Matthew";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operator
console.log(ageJonas > ageSarah); // >, <, <=,>=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 2024 > now - 2024);

////////////////////////////////////////
// OPERATOR  PRECEDENCE 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//////////////////////////////
// CODING CHALLENGE PART ONE
/////////////////////////////
// TEST 1
// Mark
// const massMark = 78;
// const heightMark = 1.69;
// John
// const massJohn = 92;
// const heightJohn = 1.95 ;

// TEST 2
// Mark
const massMark = 95;
const heightMark = 1.88;
// John
const massJohn = 85;
const heightJohn = 1.76;

// checking the bmi
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
// checking if it is true if false with the comparison operator 
const markHigherBMI = BMIMark > BMIJohn;
// logging it out in the console to see if i got it right 
console.log(BMIMark, BMIJohn, markHigherBMI);


//////////////////////////////
// STRING AND TEMPLATE LITERALS
//////////////////////////////

const firstName = "Wisdom";
const job = "Student";
const birthYear = 2005;
const year = 2024;

// concatenate
const Emediong =
  "I'm " + firstName + ", a" + (birthYear - year) + " year old " + job + "!";
console.log(Emediong);

// USING TEMPLATE LITERALS
const EmediongNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(EmediongNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
line`);

console.log(`multiline 
    strings 
    using the back ticks`);

    console.log(`Strings
    multiple 
    lines);


/////////////////////////////////////////////
// TAKING DECISIONS: IF AND ELSE STATEMENT
////////////////////////////////////////////
// const age = 19;
const age = 15;

if (age >= 18) {
  console.log("Wisdom can start taking driving classes 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Wisdom is too young, Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let Century;
if (birthYear <=2000) {
  Century = 20;
} else {
  Century = 21;
}
console.log(Century);

//////////////////////
//CODING CHALLENGE 2
/////////////////////

// TEST 1
// MARK
const massMark = 78;
const heightMark = 1.69;
// JOHN
const massJohn = 92;
const heightJohn = 1.95;

// TEST 2
// MARK
// const massMark = 95;
// const heightMark = 1.88;
// JOHN
// const massJohn = 85;
// const heightJohn = 1.76;

// Checking the BMI
const BMIMark = massMark / heightJohn ** 2;
const BMIJohn = massJohn / (heightMark * heightMark);
console.log(BMIMark, BMIJohn);
// using if else statement with template literal and logging out the output in the console
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


//////////////////////////////////
// TYPE CONVERSION AND COERCION
/////////////////////////////////

// CONVERTING A NUMBER TO A STRING
// TYPE CONVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Wisdom"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log("i am " + 19 + " years old");
console.log("23" - "10" - 3);
console.log("23" > "18");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


/////////////////////////////
// TRUTHY AND FALSY VALUES
///////////////////////////

//  5 FALSY VALUES : 0 , " ", null, undefined, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Wisdom"));
console.log(Boolean({}));
console.log(Boolean(" "));

const money = 0;
if (money) {
  console.log("Don't spent it all :)");
} else {
  console.log("You should get a Job");
}

let height = 123;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}


//////////////////////////////////
// EQUALITY OPERATOR
/////////////////////////////////

const age = 19;
if (age === 18) { // does not perform type coercion 
  console.log("You jus became an adult :D (strict)");
}
if (age == 18) { // performs type coercion 
  console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE 
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
}else if (favourite === 9) {
  console.log("9 is also a great number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23 ){
console.log("Why not 23 ?"); 
}


//////////////////////////////////
// LOGICAL OPERATOR
/////////////////////////////////
const hasDriverLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriverLicense && hasGoodVision); // && and operator
console.log(hasDriverLicense || hasGoodVision); // || or operator
console.log(!hasDriverLicense); 

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true; // C
const isTired = false // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


//////////////////////////////
//CODING CHALLENGE 3
//////////////////////////////
// // Dolphins Score
// const DolphinsScore = (96 + 108 + 89) / 3;
// // Koalas Score
// const KoalasScore = (88 + 91 + 110) / 3;
// console.log(DolphinsScore, KoalasScore);

// if (DolphinsScore > KoalasScore) {
//   console.log("Dolphins wins the trophy 🏆");
// } else if (KoalasScore > DolphinsScore) {
//   console.log("Koalas wins the trophy 🏆");
// } else if (DolphinsScore === KoalasScore) {
//   console.log("Both win the trophy 🏆");
// }

// BONUS 1
// Dolphins Score
const DolphinsScore = (97 + 112 + 101) / 3;
// Koalas Score
const KoalasScore = (109 + 95 + 123) / 3;

if (DolphinsScore > KoalasScore && DolphinsScore >= 100) {
  console.log("Dolphins wins the trophy 🏆");
} else if (KoalasScore > DolphinsScore && KoalasScore >= 100) {
  console.log("Koalas wins the trophy 🏆");
} else if (
  DolphinsScore === KoalasScore &&
  DolphinsScore >= 100 &&
  KoalasScore >= 100
) {
  console.log("Both wins the trophy 🏆");
} else {
  console.log("No one wins the trophy 😢");
}


/////////////////////
// SWITCH STATEMENT
////////////////////

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meet-up");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Got to tech meet-ups");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === " sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}


/////////////////////////////
// STATEMENT AND EXPRESSION
////////////////////////////

// EXPRESSION

// AN EXPRESSION ALWAYS PRODUCE A VALUE
3 + 4;
1991;
(true && false) || !false;

// STATEMENT

// A STATEMENT IS BLOCK OF CODE THAT DOES NOT PRODUCE ANY VALUE
if (23 > 10) {
  const str = "23 is bigger";
}

///////////////////////////////
// TERNARY OPERATOR
//////////////////////////////

const age = 23;
// age >= 18 ? console.log("i like to drink wine 🍷") : console.log("i like to drink Water 💧")

const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "Wine 🍷";
} else {
  drink2 = "Water 💧";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

///////////////////////////////
// CODING CHALLENGE 4
//////////////////////////////
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
