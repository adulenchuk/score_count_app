let team1Score = +document.querySelector("#team1_score p").innerHTML;
let team2Score = +document.querySelector("#team2_score p").innerHTML;

const button = document.getElementById("point1");
button.onclick = () => {
  team1Score++;
  document.querySelector("#team1_score p").innerHTML = team1Score;
};
