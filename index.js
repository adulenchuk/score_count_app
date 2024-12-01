const gamesContainer = document.getElementById("gamesList");

window.addEventListener("load", loadSavedGames);

function loadSavedGames() {
  const savedGames = JSON.parse(localStorage.getItem("basketballGames")) || [];

  savedGames.forEach((game, index) => {
    const gameHTML = `
        <div class="game">
          <h3>Game ${index + 1} - ${game.timestamp}</h3>
          <p>Team ${game.jerseyTypeA}: ${game.scoreA} points, ${game.foulCountA} fouls</p>
          <p>Team ${game.jerseyTypeB}: ${game.scoreB} points, ${game.foulCountB} fouls</p>
        </div>`
        ;
    gamesContainer.insertAdjacentHTML("beforeend", gameHTML);
  });
}

document.getElementById("resetSession").addEventListener("click", () => {
  localStorage.removeItem("basketballGames");
  gamesContainer.innerHTML = "";
  alert("All games cleared!");
});
