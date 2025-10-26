const gameDiv = document.getElementById("gameDiv");
const startButton = document.getElementById("startButton");
const tooLowButton = document.getElementById("tooLowButton");
const tooHighButton = document.getElementById("tooHighButton");
const correctButton = document.getElementById("correctButton");
let guessCount;

function startButtonClick() {
  gameDiv.innerHTML = "";
  guessCount = 0;
  makeGuess();
  tooLowButton.disabled = false;
  tooHighButton.disabled = false;
  correctButton.disabled = false;
}

function tooLowButtonClick() {
  let p = document.createElement("p");
  p.textContent = `Dig: Det var for lavt`;
  p.className = "human";
  gameDiv.appendChild(p);
  makeGuess();
}

function tooHighButtonClick() {
  let p = document.createElement("p");
  p.textContent = `Dig: Det var for højt`;
  p.className = "human";
  gameDiv.appendChild(p);
  makeGuess();
}

function corectButtonClick() {
  let p = document.createElement("p");
  p.textContent = `Dig: Det var korrekt`;
  p.className = "human";
  gameDiv.appendChild(p);
  tooLowButton.disabled = true;
  tooHighButton.disabled = true;
  correctButton.disabled = true;
}

function makeGuess() {
  guessCount++;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let p = document.createElement("p");
  p.textContent = `Computerens gæt nr. ${guessCount}: ${randomNumber}`;
  p.className = "computer";
  gameDiv.appendChild(p);
}

startButton.addEventListener("click", startButtonClick);
tooLowButton.addEventListener("click", tooLowButtonClick);
tooHighButton.addEventListener("click", tooHighButtonClick);
correctButton.addEventListener("click", corectButtonClick);
