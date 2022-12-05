'use strict';

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.btn--close-modal-window');
const btnsOpenModalWindow = document.querySelectorAll(
  '.btn--show-modal-window'
);

const openModalWindow = function (e) {
  e.preventDefault();
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModalWindow.forEach(button =>
  button.addEventListener('click', openModalWindow)
);

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
  }
});

////////////////////////////////////////////////////////////////////////////
// Виды событий и обработчиков событий

// const alertMouseEnterH1 = function (e) {
//   alert('addEventListener: You are now at the h1 element');
//   h1.removeEventListener('mouseenter', alertMouseEnterH1);
// };

const alertMouseEnterH1 = function (e) {
  alert('addEventListener: You are now at the h1 element');
};

// Удаление события
setTimeout(() => h1.removeEventListener('mouseenter', alertMouseEnterH1), 3000);

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertMouseEnterH1);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: You are now at the h1 element');
// };
