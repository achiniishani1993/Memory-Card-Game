const gameContainer = document.getElementById("game-container");
const endGameContainer = document.getElementById("end-game-container");
const scoreEl = document.getElementById("score");

let cardsArray = ["A", "A", "B", "B", "C", "C", "D", "D"];

function shuffle() {
  let i = array.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cardsArray[j];
    array[j] = array[i];
    array[i] = temp;
  }
}
