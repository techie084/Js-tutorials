// ALWAYS USE STRICT
"use strict";

// SELECTING ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// DOM MANIPULATION
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

// SWITCH PLAYER FUNCTIONALITY
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// ROLLING DICE BUTTON
btnRoll.addEventListener("click", function () {
  if (playing) {
    // GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;

    // DISPLAY DICE
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // CHECK FOR ROLLED ONE
    if (dice !== 1) {
      // ADD DICE TO CURRENT SCORE
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // SWITCH TO NEXT PLAYER
      switchPlayer();
    }
  }
});

// HOLD BUTTON
btnHold.addEventListener("click", function () {
  if (playing) {
    // ADD CURRENT SCORE TO ACTIVE PLAYER
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. CHECK IF PLAYER SCORE IS >= 100
    if (scores[activePlayer] >= 100) {
      // FINISH THE GAME
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // SWITCH TO NEXT PLAYER
      switchPlayer();
    }
  }
});

// RESET BUTTON
btnNew.addEventListener("click", init);
