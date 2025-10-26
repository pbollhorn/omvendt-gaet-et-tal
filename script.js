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
  gameDiv.appendChild(createP("human", "Dig: Det var for lavt"));
  min = guess + 1;
  makeGuess();
}

function tooHighButtonClick() {
  gameDiv.appendChild(createP("human", "Dig: Det var for højt"));
  max = guess - 1;
  makeGuess();
}

function corectButtonClick() {
  gameDiv.appendChild(createP("human", "Dig: Det var korrekt"));
  gameDiv.appendChild(createP("computer", `Computer: ${evaluateCount()}`));
  tooLowButton.disabled = true;
  tooHighButton.disabled = true;
  correctButton.disabled = true;
}

function makeGuess() {
  count++;
  guess = Math.floor((max + min) / 2);

  console.log(`count: ${count}`);
  console.log(`min: ${min}`);
  console.log(`max: ${max}`);
  console.log(`guess: ${guess}`);
  console.log("-------------------")

  if (min > max) {
    gameDiv.appendChild(
      createP("computer", `Computer: Jeg er færdig med at gætte!`)
    );
    return;
  }

  gameDiv.appendChild(
    createP("computer", `Computer: Mit gæt nr. ${count} er ${guess}`)
  );
}

function evaluateCount() {
  if (count == 1) return "Wow! Jeg gættede rigtigt i første forsøg!";
  if (count <= 4) return "Jeg gættede det rimeligt hurtigt";
  return "Jeg fik da gættet det, selvom det ikke var hurtigt";
}

function createP(className, textContent) {
  let p = document.createElement("p");
  p.className = className;
  p.textContent = textContent;
  return p;
}
