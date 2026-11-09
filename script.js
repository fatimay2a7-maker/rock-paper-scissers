// Select HTML Elements

const choices = document.querySelectorAll(".choice");

const winsElement = document.getElementById("wins");
const lossesElement = document.getElementById("losses");
const tiesElement = document.getElementById("ties");

const messageElement = document.getElementById("message");

const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");

const resetScoreButton = document.getElementById("reset-score");
const playAgainButton = document.getElementById("play-again");

// Game Variables

let wins = 0;
let losses = 0;
let ties = 0;

const options = ["rock", "paper", "scissors"];

// Computer Random Choice

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
}

// Play Game Function

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  // Show Choices

  playerResult.textContent = `You chose: ${playerChoice}`;

  computerResult.textContent = `Computer chose: ${computerChoice}`;

  // Check Winner

  if (playerChoice === computerChoice) {
    ties++;

    messageElement.textContent = "It's a Tie! 🤝";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    wins++;

    messageElement.textContent = "You Win! 🎉";
  } else {
    losses++;

    messageElement.textContent = "You Lose! 😢";
  }

  // Update Score Board

  winsElement.textContent = wins;

  lossesElement.textContent = losses;

  tiesElement.textContent = ties;
}

// Add Click Event To Choices

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;

    playGame(playerChoice);
  });
});

// Play Again Button

playAgainButton.addEventListener("click", () => {
  messageElement.textContent = "Choose Your Move";

  playerResult.textContent = "";

  computerResult.textContent = "";
});

// Reset Score Button

resetScoreButton.addEventListener("click", () => {
  wins = 0;

  losses = 0;

  ties = 0;

  winsElement.textContent = 0;

  lossesElement.textContent = 0;

  tiesElement.textContent = 0;

  messageElement.textContent = "Choose Your Move";

  playerResult.textContent = "";

  computerResult.textContent = "";
});
