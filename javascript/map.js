// Инициализация Canvas
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Установка размеров Canvas в зависимости от размера окна
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas(); // Инициализация размеров
window.addEventListener('resize', () => {
  resizeCanvas();
  drawMap(); // Перерисовка карты при изменении размера окна
});

// Карта с секциями
const sections = [
  { x: 100, y: 100, width: 200, height: 200, color: '#8ecae6', name: 'Arena' },
  { x: 400, y: 100, width: 200, height: 200, color: '#219ebc', name: 'Shop' },
  { x: 700, y: 100, width: 200, height: 200, color: '#023047', name: 'Boss 1' },
  { x: 100, y: 400, width: 200, height: 200, color: '#ffb703', name: 'Boss 2' },
  { x: 400, y: 400, width: 200, height: 200, color: '#fb8500', name: 'Boss 3' },
  { x: 700, y: 400, width: 200, height: 200, color: '#8f2d56', name: 'Hero' },
];

// Загрузка текстуры для фона
const tileImage = new Image();
tileImage.src = '../images/grass.jpg'; // Укажите путь к изображению текстуры

tileImage.onload = () => {
  drawMap(); // Запуск отрисовки карты после загрузки текстуры
};

// Отрисовка карты
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Создание текстуры фона
  const pattern = ctx.createPattern(tileImage, 'repeat');
  if (pattern) {
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Отрисовка фона
  }

  // Отрисовка секций карты
  sections.forEach((section) => {
    // Отрисовка блока
    ctx.fillStyle = section.color;
    ctx.fillRect(section.x, section.y, section.width, section.height);

    // Отрисовка текста внутри блока
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(section.name, section.x + 50, section.y + 110);
  });
}

// Обработка кликов на карте
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  sections.forEach((section) => {
    if (
      x >= section.x &&
      x <= section.x + section.width &&
      y >= section.y &&
      y <= section.y + section.height
    ) {
      alert(`You clicked on ${section.name}`);
      // Здесь можно добавить логику перехода на другие страницы или действия
      if (section.name === 'Arena') {
        window.location.href = 'arena.html';
      } else if (section.name === 'Shop') {
        window.location.href = 'shop.html';
      } else if (section.name === 'Hero') {
        window.location.href = 'hero.html';
      }
      // Для боссов можно добавить уникальные действия
    }
  });
});
