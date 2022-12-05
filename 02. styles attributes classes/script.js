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
const message = document.createElement('div'); // создаем элемент
message.classList.add('cookie-message');
message.innerHTML =
  'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn--close-cookie">Ok!</button>';
const header = document.querySelector('.header');
header.prepend(message);
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Стили

message.style.backgroundColor = '#076785';
message.style.width = '110%';
console.log(message.style.width); // стили установленные напрямую через js можно считать
console.log(message.style.color);
console.log(getComputedStyle(message).color); // метод используется для считывания стиля из CSS
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 50 + 'px'; // Приводим значение высоты к целому числу и прибавляем 50px

document.documentElement.style.setProperty('--color-first', 'yellow');

// Атрибуты
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);

logo.alt = 'Лого Прекрасного Банка';
// Нестандартный атрибут
console.log(logo.getAttribute('developer'));
logo.setAttribute('copyright', 'Masters Of Code');
console.log(logo.getAttribute('copyright'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber); // получаем значение data атрибута

// Classes

logo.classList.add('a', 'b');
logo.classList.remove('a', 'b');
logo.classList.toggle('a');
logo.classList.contains('c');

// Не использовать
logo.className = 'a';
