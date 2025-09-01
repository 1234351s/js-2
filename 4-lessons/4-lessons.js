
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let currentKeyIndex = 0;


const keyDisplay = document.getElementById('key');
const newGameBtn = document.getElementById('newGame');


function updateKey() {
  keyDisplay.textContent = keys[currentKeyIndex];
}


function startGame() {
  currentKeyIndex = 0;
  updateKey();
  PNotify.success({ text: 'Почалося! Натисни на  правильну клавішу.' });
}


document.addEventListener('keydown', (e) => {
  const pressedKey = e.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      updateKey();
      PNotify.success({ text: `Правильно Натисни: ${keys[currentKeyIndex]}` });
    } else {
      keyDisplay.textContent = 'Добре';
      PNotify.success({ text: 'Вітаємо! Ви Вийграли гру.' });
    }
  } else {
    PNotify.error({ text: `Помилка! Ви натиснули "${pressedKey}", чекаемо  "${keys[currentKeyIndex]}"` });
  }
});


document.addEventListener('keypress', (e) => {
  e.preventDefault();
});


newGameBtn.addEventListener('click', startGame);


startGame();

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.3,
    },
  ],
};

const config = {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Продажі за останній місяць',
        font: { size: 18 }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

new Chart(document.getElementById('sales-chart'), config);
