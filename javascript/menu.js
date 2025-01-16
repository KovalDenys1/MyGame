// Получаем элементы меню
const menu = document.getElementById('menu');
const startGameBtn = document.getElementById('startGameBtn');
const settingsBtn = document.getElementById('settingsBtn');
const exitBtn = document.getElementById('exitBtn');

// Функция для старта игры
function startGame() {
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
startGameBtn.addEventListener('click', startGame);
settingsBtn.addEventListener('click', openSettings);
exitBtn.addEventListener('click', exitGame);
