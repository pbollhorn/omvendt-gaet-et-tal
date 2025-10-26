let gameDiv = document.getElementById("gameDiv");
let guessNumber = 0;

function startButtonClick() {
  makeGuess();
}

function tooLowButtonClick() {
  alert("Hello from tooLow");
}

function tooHighButtonClick() {
  alert("Hello from tooHigh");
}

function corectButtonClick() {
  alert("Hello from Correct");
}

function makeGuess() {
  guessNumber++;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let p = document.createElement("p");
  p.textContent = `Gæt ${guessNumber}: Computeren gætter på ${randomNumber}`;
  gameDiv.appendChild(p);
}

document
  .getElementById("startButton")
  .addEventListener("click", startButtonClick);
document
  .getElementById("tooLowButton")
  .addEventListener("click", tooLowButtonClick);
document
  .getElementById("tooHighButton")
  .addEventListener("click", tooHighButtonClick);
document
  .getElementById("correctButton")
  .addEventListener("click", corectButtonClick);

gameDiv.appendChild(p);
