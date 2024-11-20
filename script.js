let scoreA = 0;
let scoreB = 0;
let timerInterval;
let remainingSeconds = 10 * 60; // 10 хвилин у секундах

// Елементи для оновлення результатів
const scoreAElement = document.getElementById("scoreA");
const scoreBElement = document.getElementById("scoreB");
const timerElement = document.getElementById("timer");

//Зміна рахунку
document.addEventListener("click", (event) => {
  const { team, points } = event.target.dataset;
  if (team && points) {
    const pointsValue = parseInt(points);
    if (team === "A") {
      scoreA += pointsValue;
      scoreAElement.textContent = scoreA;
    } else if (team === "B") {
      scoreB += pointsValue;
      scoreBElement.textContent = scoreB;
    }
  }
});

// Функція для оновлення відображення часу
function updateTimeDisplay() {
  const minutes = Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

// Функція для запуску countdown
function startCountdownTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateTimeDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Time is up!");
      }
    }, 1000);
  }
}

// Функція для паузи таймера
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Ініціалізуємо початковий час на дисплеї
updateTimeDisplay();

// Додаємо обробники для таймера
document
  .getElementById("startTimer")
  .addEventListener("click", startCountdownTimer);
document.getElementById("pauseTimer").addEventListener("click", pauseTimer);
