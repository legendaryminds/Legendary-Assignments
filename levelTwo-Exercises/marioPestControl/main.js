// main.js
document
  .getElementById("goombasInput")
  .addEventListener("input", calculateTotal);
document
  .getElementById("bobombsInput")
  .addEventListener("input", calculateTotal);
document
  .getElementById("cheepcheepsInput")
  .addEventListener("input", calculateTotal);

function calculateTotal() {
  let goombasInput =
    parseInt(document.getElementById("goombasInput").value) || 0;
  let bobombsInput =
    parseInt(document.getElementById("bobombsInput").value) || 0;
  let cheepcheepsInput =
    parseInt(document.getElementById("cheepcheepsInput").value) || 0;

  let goombasTotal = goombasInput * 5;
  let bobombsTotal = bobombsInput * 7;
  let cheepcheepsTotal = cheepcheepsInput * 11;

  let totalCoins = goombasTotal + bobombsTotal + cheepcheepsTotal;

  document.getElementById("total").value = totalCoins;

  // Play the coin sound
  playCoinSound();
}

function playCoinSound() {
  var coinSound = document.getElementById("coinSound");
  coinSound.play();
}
