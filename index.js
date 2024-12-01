window.addEventListener("load", loadSavedGames);
const gamesContainer = document.getElementById("gamesList"); // Передбачається, що є контейнер для списку


function loadSavedGames() {
  const savedGames = JSON.parse(localStorage.getItem("basketballGames")) || [];

  savedGames.forEach((game, index) => {
    const gameHTML = `
        <div class="game">
          <h3>Game ${index + 1} - ${game.timestamp}</h3>
          <p>Team A: ${game.scoreA} points, Fouls: ${
      game.foulCountA
    }, Jerseys: ${game.jerseyTypeA}</p>
          <p>Team B: ${game.scoreB} points, Fouls: ${
      game.foulCountB
    }, Jerseys: ${game.jerseyTypeB}</p>
        </div>
      `;
    gamesContainer.insertAdjacentHTML("beforeend", gameHTML);
  });
}

document.getElementById("clearGames").addEventListener("click", () => {
  localStorage.removeItem("basketballGames");
  gamesContainer.innerHTML = "";
  alert("All games cleared!");
});
