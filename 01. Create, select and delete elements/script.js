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
// Выбор элементов
console.log(document.documentElement); // обращение ко всему html документу
console.log(document.head); // к тегу head
console.log(document.body); // к тегу body

console.log(document.querySelector('.header'));
const sections = document.querySelectorAll('.section'); // нет динамического обновления
console.log(sections);

console.log(document.getElementById('section--1'));
const buttons = document.getElementsByTagName('button'); // есть динамическое обновление
console.log(buttons);

console.log(document.getElementsByClassName('btn')); // есть динамическое обновление

// Создание и вставка элементов
// .insertAdjacentHTML()
const message = document.createElement('div'); // создаем элемент
message.classList.add('cookie-message'); // добавляем ему класс
// message.textContent = 'Мы используем на этом сайте cookie для улучшения функциональности.'
message.innerHTML =
  'Мы используем на этом сайте cookie для улучшения функциональности. <button class="btn btn--close-cookie">Ok!</button>'; // добавляем ему кнопку
const header = document.querySelector('.header');
header.prepend(message); // помещаем элемент в header (.prepend добавляет элемент как первый дочерний элемент)
header.append(message); // .append() добавляет элемент как последний дочерний элемент. При этом элемент добавленный как первы дочерний пропадет, так как это один и тот же элемент и он не может быть одновременно в нескольких местах
// header.append(message.cloneNode(true)); // .cloneNode(true) клонирует узел элемента и элемент появляется и вначале и в конце
// header.before(message);
// header.after(message);

// Удаление элементов
document // Удаляем сообщение по нажатию на кнопку
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // новый метод удаления элемента
    // message.parentElement.removeChild(message)  // старый метод удаления элемента
  });
