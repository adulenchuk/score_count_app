let scoreA = 0;
let scoreB = 0;
let timerInterval;
let remainingSeconds = 10 * 60;

// Елементи для результатів
const jerseyTypeAElement = document.querySelector('select[name="jerseyTypeA"]');
const jerseyTypeBElement = document.querySelector('select[name="jerseyTypeB"]');
const scoreAElement = document.getElementById("scoreA");
const scoreBElement = document.getElementById("scoreB");
const foulCountAElement = document.getElementById("foulCountA");
const foulCountBElement = document.getElementById("foulCountB");
const timerElement = document.getElementById("timer");

//Зміна рахунку
document.addEventListener("click", (event) => {
  const { team, points } = event.target.dataset;
  if (team && points) {
    const pointsValue = parseInt(points);
    if (team === "A") {
      scoreA += pointsValue;
      scoreAElement.textContent = scoreA.toString().padStart(2,'0');
    } else if (team === "B") {
      scoreB += pointsValue;
      scoreBElement.textContent = scoreB.toString().padStart(2,'0');
    }
  }
});

//Керування часом та фолами
function updateTimeDisplay() {
  const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, "0");
  const seconds = (remainingSeconds % 60).toString().padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
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
    }, 500);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

updateTimeDisplay();


document.getElementById("control_section").addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "startTimer") {
    startTimer();
  } else if (target.id === "pauseTimer") {
    pauseTimer();
  } else if (target.id === "foulA") {
    pauseTimer();
    foulCountAElement.textContent++;
  } else if (target.id === "foulB") {
    pauseTimer();
    foulCountBElement.textContent++;
  }
});


// Робота з Local Storage
function saveData() {
  const newGameData = {
    jerseyTypeA: jerseyTypeAElement.value,
    jerseyTypeB: jerseyTypeBElement.value,
    scoreA: parseInt(scoreAElement.textContent),
    scoreB: parseInt(scoreBElement.textContent),
    foulCountA: parseInt(foulCountAElement.textContent),
    foulCountB: parseInt(foulCountBElement.textContent),
    timestamp: new Date().toLocaleString(),
  };

  const savedGames = JSON.parse(localStorage.getItem("basketballGames")) || [];
  savedGames.push(newGameData);

  localStorage.setItem("basketballGames", JSON.stringify(savedGames));
}

document.querySelector('button[name="submitBtn"]').addEventListener("click", (event) => {
    event.preventDefault();
    saveData();
    alert("Game added to the session!");
    window.location.href = "index.html";
  });