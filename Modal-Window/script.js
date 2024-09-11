// ALWAYS USE STRICT MODE
"use strict";

// STORING THE CLASSES IN VARIABLES
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// FUNCTION FOR OPENING MODAL
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// FUNCTION FOR CLOSING MODAL
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// LOOPING THROUGH THE BTN AND PASSING IN EVENT-HANDLERS AND THE FUNCTION ABOVE
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// CLOSING THE MODAL WITH THE ESCAPE KEY
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
});
