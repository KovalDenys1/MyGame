// Получаем элементы меню
const menu = document.getElementById('menu');
const mapBtn = document.getElementById('mapBtn');
const settingsBtn = document.getElementById('settingsBtn');
const exitBtn = document.getElementById('exitBtn');

// Функция для старта игры
function map() {
  window.location.href = 'game.html'; // Переход на страницу игры
}

// Функция для открытия настроек
function openSettings() {
  alert('Settings menu is under construction.');
}

// Функция для выхода
function exitGame() {
  window.close(); // Закрыть окно браузера (работает только в некоторых случаях)
}

// Обработчики событий для кнопок
mapBtn.addEventListener('click', map);
settingsBtn.addEventListener('click', openSettings);
exitBtn.addEventListener('click', exitGame);
