document
  .getElementById("tooLowButton")
  .addEventListener("click", tooLowButtonClick);
document
  .getElementById("tooHighButton")
  .addEventListener("click", tooHighButtonClick);
document
  .getElementById("correctButton")
  .addEventListener("click", corectButtonClick);

function tooLowButtonClick() {
  alert("Hello from tooLow");
}

function tooHighButtonClick() {
  alert("Hello from tooHigh");
}

function corectButtonClick() {
  alert("Hello from Correct");
}
