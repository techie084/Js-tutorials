// Always use in all code
"use strict";

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(2005));

// Problem 1;
// We work for a company building a smart home thermometer. Our most recent task is this :
// "Given an array of temperature for one day, Calculate the given temperature amplitude.
// Keep in mind that sometimes there might be a sensor error"

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// What is a temperature amplitude? Answer : the difference between the highest and the lowest temp
// How to compute max and mix temp
// What is a sensor error? And what to do ?

// 2) Break up into sub problem
// How to ignore errors ?
// Find  max value in an array
// Find min value in an array
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// Problem 2;
// Function show now receive 2 arrays of temps

// 1) Understand the problem
// With 2 arrays should we implement functionality twice ? No! Just merge two arrays

// 2) Break up into sub problem
// - Merge two arrays

const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// const amplitudeNew = calcTempAmplitudeNew(temperature);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


//////////////////
// HOW TO DE-BUG
/////////////////

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // FIX THE BUG
    value: Number(prompt("Degree Celsius")),
  };
  // FIND THE BUG
  console.table(measurement);

  // console.log(measurement.value)
  // console.warn(measurement.value)
  // console.error(measurement.value)

  const kelvin = measurement.value + 273;
  return kelvin;
};

// IDENTIFY THE BUG
console.log(measureKelvin());

// HOW TO USE A DEBUGGER
const calcTempAmplitudeBug = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// const amplitudeNew = calcTempAmplitudeNew(temperature);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// IDENTIFY THE BUG
console.log(amplitudeBug);
*/

///////////////////////////////
// CODING CHALLENGE 1
//////////////////////////////

// 1) Understand the problem
// Array transformed to String, Separated by ...
// What is x days ? Answer index + 1

// 2) Break up into sub problem
// Transform an array into string
// Transform element to degree celsius
// String need to contain day (index + 1)
//  Add ... between element and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[0]}C ...${data1[2]}C ... `);

const printForecast = function (arr) {
  let str = " ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}oC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
