//define the array 8 elements
//shuffle function
// display in UI shuffle elements
//click twice - match cards score need to add and turns not turn back if not cards turn back
// All cards matched - congratulations

const gameContainer = document.getElementById("game-container");
const endGameContainer = document.getElementById("end-game-container");
const scoreEl = document.getElementById("score");

let cardsArray = ["A", "A", "B", "B", "C", "C", "D", "D"];
let shuffleCards = [];
let firstCard = null;
let secondCard = null;
let score = 0;

function shuffle(array) {
  let i = array.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1)); //5
    console.log("j " + j); // 5
    temp = cardsArray[j]; // c,
    console.log("cardsarray j " + cardsArray[j]);
    console.log("cardsarray i " + cardsArray[i]);
    array[j] = array[i];
    array[i] = temp;
  }
  console.log(array);
  return array;
}

function createBoard() {
  let shuffleCards = shuffle(cardsArray);
  console.log(shuffleCards);

  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement("div");
    card.dataset.letter = shuffleCards[i];
    card.innerHTML = "?";
    gameContainer.appendChild(card);

    let lockBoard = false;

    card.addEventListener("click", function () {
      if (lockBoard) return;
      if (card === firstCard) return;

      card.innerHTML = this.dataset.letter;

      if (firstCard === null) {
        firstCard = card;
      } else if (secondCard === null) {
        secondCard = card;
        lockBoard = true;

        if (firstCard.dataset.letter === secondCard.dataset.letter) {
          scoreEl.innerHTML = score += 1;

          endGameContainer.style.display = "block";
          endGameContainer.innerHTML = "Matched.. keep going";

          firstCard = null;
          secondCard = null;
          lockBoard = false;
        } else {
          endGameContainer.style.display = "block";
          endGameContainer.innerHTML = "UnMatched.. try again";

          setTimeout(() => {
            firstCard.innerHTML = "?";
            secondCard.innerHTML = "?";
            endGameContainer.style.display = "none";

            firstCard = null;
            secondCard = null;
            lockBoard = false;
          }, 1000);
        }
      }
    });
  }
}

createBoard();
