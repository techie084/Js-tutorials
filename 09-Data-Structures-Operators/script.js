// Always Use Strict Mode
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

  // ES6 Enhanced Objects Literals
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
////////////////////////////
// String Method Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25  +_Arrival;bru0943384722;fao93766109;11:45  +_Delayed_Arrival;hel7439299980;fao93766109;12:05  +_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//  🔴  Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// solution
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

/*
/////////////////////////
// Coding Challenge #4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Solution
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const row = text.split("\n");
  console.log(row);

  for (const [i, row] of row.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

///////////////////////////////////
// Working With Strings Part #1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

// methods
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("you got the middle seat 😬");
  else console.log("you got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("22C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));

// Part #2
// const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in Name
const passenger = "jOnAs";
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing Emails
const emails = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n ";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(emails === normalizedEmail);

// Replacing
const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to Boarding door 23.Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
// const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the New Airbus Family");
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else console.log("Welcome onboard!");
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for Protection");


//////////////////////////
// Coding Challenge #3
const gameEvents = new Map([
  [17, "⚽ Goal"],
  [36, "🔁 Substitution"],
  [47, "⚽ Goal"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow Card"],
  [69, "🟥 Red Card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ Goal"],
  [80, "⚽ Goal"],
  [92, "🟨 Yellow Card"],
]);

// solution one
const events = [...new Set(gameEvents.values())];
console.log(events);

// solution two
gameEvents.delete(64);

// solution three
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes `
);

// solution four
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} Half] ${min}: ${event}`);
}

/////////////////////
// Maps : Iteration
const question = new Map([
  ["Question", "What is the best Programming Language in the World?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert Object to Maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get(question));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt("Your Answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to an array
console.log([...question]);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());

/////////////////////
// Maps Fundamental
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 12)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

///////////
// Sets
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Risotto",
  "pasta",
  "pizza",
]);
console.log(orderSet);

console.log(new Set("Wisdom"));

console.log(orderSet.size);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
orderSet.delete("Risotto");
// orderSet.clear()
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);

console.log(new Set("jonas-schmedtmann").size);

/////////////////////////
// Coding Challenge #2
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

// Solution One
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Solution Two
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// Solution Three
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

//////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, And Entries
// Property Names
const properties = object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days`;
for (const days of properties) {
  openStr += `${days},`;
}
console.log(openStr);

// Property Values
const values = object.values(openingHours);
console.log(values);

// Entries objects
const entries = object.entries(openingHours);
// console.log(entries);

// [keys, values]
for (const [days, { open, close }] of entries) {
  console.log(`on ${days} we open at ${open} and close at ${close}`);
}

////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon.open)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const days of days) {
  const open = restaurant.openingHours[days]?.open ?? "Closed";
  console.log(`on ${days}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Wisdom", email: "hello@wisdom.io" }];
// const users =[]

console.log(users[0]?.name ?? "User array empty");
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

////////////////
// For Of Loop
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

///////////////////////////
// Coding Challenge #1
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
*/

/*
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


///////////////////////////////////////
// Nullish Coalescing Operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish : null and undefined (NOT 0 or " ")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/////////////////////////////////////////////////////////
// Short Circuiting With The (AND && OR ||) Operator
console.log("---- OR ----");
// Use any Data Type , Return Any Data Type , Short Circuiting (Short Circuit Evaluation)
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

// The And Operator Works In The Opposite Way of the operator 
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
// Rest Pattern And Parameters (...)
// PART ONE => Destructuring 

// Difference Between Rest and Spread 
// Spread is in the right sid of the Assignment Operator
const arr = [1, 2, ...[3, 4]];

// Rest is on the Left Side of the Assignment Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, , Risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFoods);

// Objects
const { sat, ...Weekdays } = restaurant.openingHours;
console.log(Weekdays);

// Part Two => Function 
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
// Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copying Arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join Two or More Arrays Together 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// ITERABLES: Arrays, Strings, Maps, Sets NOT Objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log("j", "o");
// console.log(${...str} Schmedtmann);

// Real World Example
const ingredients = [
  //   prompt("Let's make Pasta Ingredient 1? "),
  //   prompt("Ingredients 2?"),
  //   prompt("Ingredients 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
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
// Destructuring An Objects
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

// Default ValUes
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating Variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

////////////////////////////
// Destructuring An Array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 Return Values From a Function 
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

// Nested Destructuring 
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
