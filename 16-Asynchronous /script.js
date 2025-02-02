"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" /> 
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "SomThing Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

/*
//////////////////////////////////////////////
// Asynchronous JavaScript , Ajax and API's

///////////////////////////////////////////
// Our First Ajax Call : XMLHttpRequest
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flags}" /> 
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.language}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("portugal");
// getCountryData("nigeria");
// getCountryData("usa");


///////////////////////////////////////////////
// How the Web Works : Request and Response

///////////////////////////////
// Welcome to Callback Hell


const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.border;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // render country 2
      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbour("portugal");
getCountryAndNeighbour("usa");

setTimeout(() => {
  console.log("1 Seconds Passed");
  setTimeout(() => {
    console.log("2 Seconds Passed");
    setTimeout(() => {
      console.log("3 Seconds Passed");
      setTimeout(() => {
        console.log("4 Seconds Passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//////////////////////////////
// Promises and Fetch API
// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const request = fetch("`https://restcountries.com/v3.1/name/portugal");
console.log(request);

////////////////////////
// Consuming Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };



// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`SomeThing Went Wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No Neighbour Found!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not Found"
      );
    })

    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(`${err} 💥💥💥`);
      renderError(`SomeThing Went Wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});

getCountryData("australia");

///////////////////////
// Chaining Promises

/////////////////////////////////
// Handling Rejected Promises

//////////////////////////////
// Throwing Error Manually

/////////////////////////
// Coding Challenge #1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem With geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not Found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

///////////////////////////////////////////////////////
// Asynchronous Behind the scenes: The Event Loop

//////////////////////////////////
// The Event Loop in Practice
console.log("Test Start");
setTimeout(() => console.log("0 sec Timer"), 0);
Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
Promise.resolve("Resolved Promise 2").then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log("Test end");

//////////////////////////////////
// Building a Simple Promise
const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery draw is happening 🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Win 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = (sec) => {
  return new Promise((res) => {
    setTimeout(res, sec * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 seconds Passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds Passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds  Passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 second Passed");
  });

// setTimeout(() => {
//   console.log("1 Seconds Passed");
//   setTimeout(() => {
//     console.log("2 Seconds Passed");
//     setTimeout(() => {
//       console.log("3 Seconds Passed");
//       setTimeout(() => {
//         console.log("4 Seconds Passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve("abc").then((x) => console.log(x));
Promise.resolve(new Error("Problem!")).catch((x) => console.error(x));

/////////////////////////////////////////
// Promisifying the Geo-Location Api
const getPosition = () => {
  return new Promise((res, rej) => {
    // navigator.geolocation.getCurrentPosition(
    //   (pos) => res(pos),
    //   (err) => rej(err)
    // );
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};
// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem With geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not Found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

btn.addEventListener("click", whereAmI);


/////////////////////////////////
// Coding Challenge #2
const wait = (sec) => {
  return new Promise((res) => {
    setTimeout(res, sec * 1000);
  });
};

const imagesContainer = document.querySelector(".images");

// Global variable to store the current image element
let currentImage;

const createImage = (imgPath) => {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.scr = imgPath;

    img.onload = () => {
      imagesContainer.append(img);
      res(img);
    };

    img.onerror = () => {
      rej(new Error("Image failed to load."));
    };
  });
};

createImage("img/img-1.jpg")
  .then((imgElement) => {
    currentImage = imgElement;
    console.log("Image 1 successfully loaded");
    return wait(2);
  })
  .then(() => {
    console.log("Waited for 2 seconds.");
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((imgElement) => {
    currentImage = imgElement;
    console.log("Image 2 successfully loaded");
    return wait(2);
  })
  .then(() => {
    console.log("Waited for 2 seconds.");
    currentImage.style.display = "none";
  })
  .catch((error) => console.error("Error loading image:", error));
  

///////////////////////////////////////////
// Consuming Promise With Async /Await
const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

// fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) =>
//   console.log(res)
// );

const whereAmI = async () => {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Problem getting Country");
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city} ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject Promise coming from async function
    throw err;
  }
};
console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message}`))
//   .finally(() => console.log("3: Finished getting location"));

(async () => {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log("3: Finished getting location");
})();

//////////////////////////////////////
// Error Handling with Try...Catch

///////////////////////////////////////////
// Returning Value from Async Functions


////////////////////////////////////
// Running Promises in Parallel
const g3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
g3Countries("portugal", "canada", "tanzania");


//////////////////////////////////////////////////////////////
// Other Promise combinators : Race, All-selected And Any

// Promise.race
// (async () => {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = (sec) => {
//   return new Promise((_, rej) => {
//     setTimeout(() => {
//       rej(new Error("Request took to long!"));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   timeout(1),
// ])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));

// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve("Success"),
//   Promise.reject("error"),
//   Promise.resolve("Another Success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any
// Promise.any([
//   Promise.resolve("Success"),
//   Promise.reject("error"),
//   Promise.resolve("Another Success"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err)); 
*/

// Coding Challenge #3

const wait = (sec) => {
  return new Promise((res) => {
    setTimeout(res, sec * 1000);
  });
};

const imagesContainer = document.querySelector(".images");

// Global variable to store the current image element
let currentImage;

const createImage = (imgPath) => {
  return new Promise((res, rej) => {
    const img = document.createElement("img");
    img.scr = imgPath;

    img.onload = () => {
      imagesContainer.append(img);
      res(img);
    };

    img.onerror = () => {
      rej(new Error("Image failed to load."));
    };
  });
};

// createImage("img/img-1.jpg")
//   .then((imgElement) => {
//     currentImage = imgElement;
//     console.log("Image 1 successfully loaded");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("Waited for 2 seconds.");
//     currentImage.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((imgElement) => {
//     currentImage = imgElement;
//     console.log("Image 2 successfully loaded");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("Waited for 2 seconds.");
//     currentImage.style.display = "none";
//   })
//   .catch((error) => console.error("Error loading image:", error));

// Part 1 
const loadNPause = async () => {
  try {
    // Load image 1
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 Loaded");
    await wait(2);
    img.style.display = "none";

    // Load image 2
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 Loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};
// loadNPause()

// Part 2 
const loadAll = async (imgArr) => {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEL = await Promise.all(imgs);
    console.log(imgsEL);
    imgsEL.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.log(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);


