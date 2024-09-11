// ALWAYS USE STRICT MODE
"use strict";

const Weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [Weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [Weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [Weekdays[5]]: {
    open: 0, // open 24 Hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 ENHANCED OBJECTS LITERALS
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your Delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon.open)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
/*
////////////////
// FOR OF LOOP
///////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
// console.log(item);
// console.log(`${item[0] + 1}: ${item[1]}`);
// }

// destructuring the item
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

/////////////////////////
// CODING CHALLENGE (1)
////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// solution one
const [players1, players2] = game.players;
console.log(players1, players2);

// solution two
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const [gk2, ...otherPlayers2] = players2;
console.log(gk2, otherPlayers2);

// solution three
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// solution four
const player1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// solution five
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// solution six
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals where scored`);
};
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
printGoals(...game.scored);

// solution seven
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");


/////////////////////////////////////
// NULLISH COALESCING OPERATOR (??)
////////////////////////////////////
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish : null and undefined (NOT 0 or " ")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

///////////////////////////////////////////////////////
// SHORT CIRCUITING WITH THE (AND && OR ||) OPERATOR
//////////////////////////////////////////////////////
console.log("---- OR ----");
// USE ANY DATA TYPE , RETURN ANY DATA TYPE , SHORT CIRCUITING (SHORT CIRCUIT EVALUATION)
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// THE AND OPERATOR WORKS IN THE OPPOSITE WAY OF THE OR OPERATOR
console.log("---- AND ----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//////////////////////////////////////
// REST PATTERN AND PARAMETERS (...)
/////////////////////////////////////
// PART ONE => DESTRUCTURING

// DIFFERENCE BETWEEN REST AND SPREAD
// SPREAD IS ON THE RIGHT SIDE OF THE ASSIGNMENT OPERATOR
const arr = [1, 2, ...[3, 4]];

// REST IS ON THE LEFT SIDE OF THE ASSIGNMENT OPERATOR
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFoods);

// OBJECTS
const { sat, ...Weekdays } = restaurant.openingHours;
console.log(Weekdays);

// PART TWO => FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushroom", "onions", "olives", "spinach");
restaurant.orderPizza("mushroom");

/////////////////////////
// SPREAD OPERATOR (...)
/////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// COPYING ARRAYS
const mainMenuCopy = [...restaurant.mainMenu];

// JOIN 2 ARRAYS OR MORE TOGETHER
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ITERABLES: Arrays, Strings, Maps, Sets NOT Objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log("j", "o");
// console.log(${...str} Schmedtmann);

// REAL WORLD EXAMPLE
const ingredients = [
  //   prompt("Let's make Pasta Ingredient 1? "),
  //   prompt("Ingredients 2?"),
  //   prompt("Ingredients 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// OBJECTS
const newRestaurant = {
  foundedIn: 2023,
  ...restaurant,
  founder: "Wisdom Matthew",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//////////////////////////////
// DESTRUCTURING AN OBJECTS
/////////////////////////////
restaurant.orderDelivery({
  time: "22:30",
  address: "Via Del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via Del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// DEFAULT VALUES
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////////////////
// DESTRUCTURING AN ARRAY
///////////////////////////
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

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, [j, k]] = nested;
console.log(i, j, k);

// DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
