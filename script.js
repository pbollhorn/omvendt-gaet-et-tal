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
  p = createP("human", "Dig: Det var for lavt");
  gameDiv.appendChild(p);
  min = guess + 1;
  makeGuess();
}

function tooHighButtonClick() {
  p = createP("human", "Dig: Det var for højt");
  gameDiv.appendChild(p);
  max = guess - 1;
  makeGuess();
}

function corectButtonClick() {
  p = createP("human", "Dig: Det var korrekt");
  gameDiv.appendChild(p);
  tooLowButton.disabled = true;
  tooHighButton.disabled = true;
  correctButton.disabled = true;
}

function makeGuess() {
  count++;
  guess = Math.floor((max + min) / 2);
  p = createP("computer", `Computerens gæt nr. ${count}: ${guess}`);
  gameDiv.appendChild(p);
}

function createP(className, textContent) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = textContent;
  return p;
}
