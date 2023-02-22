function getComputerChoice() {
  const SHAPES = ["rock", "paper", "scissors"];
  const randomShapeIndex = Math.floor(Math.random() * SHAPES.length);
  const computerChoice = SHAPES[randomShapeIndex];
  return computerChoice;
}

function createRoundMessage(result, player, computer) {
  const playerCaps = player.charAt(0).toUpperCase().concat(player.slice(1));
  const computerCaps = computer
    .charAt(0)
    .toUpperCase()
    .concat(computer.slice(1));
  let message;
  if (result === "Win") {
    message = `You ${result}! ${playerCaps} beats ${computerCaps}`;
  } else {
    message = `You ${result}! ${computerCaps} beats ${playerCaps}`;
  }
  return message;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;
  switch (true) {
    case player === "rock" && computer === "scissors":
    case player === "paper" && computer === "rock":
    case player === "scissors" && computer === "paper":
      return createRoundMessage("Win", player, computer);
    case computer === "rock" && player === "scissors":
    case computer === "paper" && player === "rock":
    case computer === "scissors" && player === "paper":
      return createRoundMessage("Lose", player, computer);
    default:
      return `It's a draw!`;
  }
}

function updateScore(msg) {
  if (msg.includes(`Win`)) {
    playerPoints++;
  } else if (msg.includes(`Lose`)) {
    computerPoints++;
  }
  displayRoundScore(msg);
}

function displayRoundScore(msg) {
  const score = document.createElement("span");
  score.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`;
  const scoreMessage = document.createElement("span");
  scoreMessage.textContent = `${msg}`;
  round.textContent = "";
  round.appendChild(score);
  round.appendChild(scoreMessage);
}

function displayWinner() {
  if (playerPoints === 5) {
    result.textContent = "You won the game!";
    result.style.color = "green";
    playerPoints = 0;
    computerPoints = 0;
  } else if (computerPoints === 5) {
    result.textContent = "You lost the game!";
    result.style.color = "red";
    playerPoints = 0;
    computerPoints = 0;
  }
}

const round = document.querySelector("#round");
const result = document.querySelector("#result");
let playerPoints = 0;
let computerPoints = 0;

const shapes = document.querySelectorAll(".shape");
shapes.forEach((shape) => {
  shape.addEventListener("click", () => {
    if (playerPoints === 0 && computerPoints === 0) {
      result.textContent = "";
    }
    const roundResult = playRound(shape.innerText, getComputerChoice());
    updateScore(roundResult);
    displayWinner();
  });
});
