const gameDiv = document.getElementById("gameDiv");
const startButton = document.getElementById("startButton");
const tooLowButton = document.getElementById("tooLowButton");
const tooHighButton = document.getElementById("tooHighButton");
const correctButton = document.getElementById("correctButton");
startButton.addEventListener("click", startButtonClick);
tooLowButton.addEventListener("click", tooLowButtonClick);
tooHighButton.addEventListener("click", tooHighButtonClick);
correctButton.addEventListener("click", corectButtonClick);

let count;
let min;
let max;
let guess;

function startButtonClick() {
  gameDiv.innerHTML = "";
  count = 0;
  min = 1;
  max = 100;
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
  min = guess + 1;
  makeGuess();
}

function tooHighButtonClick() {
  let p = document.createElement("p");
  p.textContent = `Dig: Det var for højt`;
  p.className = "human";
  gameDiv.appendChild(p);
  max = guess - 1;
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
  count++;
  guess = Math.floor((max + min) / 2);
  let p = document.createElement("p");
  p.textContent = `Computerens gæt nr. ${count}: ${guess}`;
  p.className = "computer";
  gameDiv.appendChild(p);
}
