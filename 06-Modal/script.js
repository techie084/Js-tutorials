// Always Use Strict Mode
"use strict";

// Storing The Classes inn Variable
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// Function For Opening Modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function For Closing Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Looping Through the Btn and Passing Event-Handlers And the Function Above
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// Closing the Modal With escape Key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains(".hidden")) {
    closeModal();
  }
});
