const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Player {
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
  }

  setName(namePicked) {
    if (namePicked === "Mario" || namePicked === "Luigi") {
      this.name = namePicked;
    } else {
      console.log("Name must be either 'Mario' or 'Luigi'");
    }
  }

  gotHit() {
    if (this.hasStar) {
      console.log("Your star protected you!");
      this.hasStar = false;
      return;
    }

    const statuses = ["Powered Up", "Big", "Small", "Dead"];
    const index = statuses.indexOf(this.status);
    this.status = index > 0 ? statuses[index - 1] : "Dead";
  }

  gotPowerup() {
    if (this.status === "Powered Up") {
      this.hasStar = true;
    } else {
      const statuses = ["Small", "Big", "Powered Up"];
      const index = statuses.indexOf(this.status);
      this.status =
        index < statuses.length - 1 ? statuses[index + 1] : "Powered Up";
    }
  }

  addCoin() {
    this.totalCoins += 1;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Status: ${this.status}`);
    console.log(`Coins: ${this.totalCoins}`);
    console.log(`Has Star: ${this.hasStar}\n`);
  }
}

function randomRange() {
  return Math.floor(Math.random() * 3);
}

const player = new Player();

rl.question("Choose your player (Mario/Luigi): ", (name) => {
  if (name === "Mario" || name === "Luigi") {
    player.setName(name);
  } else {
    console.log("Invalid name. Please choose 'Mario' or 'Luigi'.");
    rl.close();
    return;
  }

  const interval = setInterval(() => {
    const action = randomRange();
    if (action === 0) player.gotHit();
    else if (action === 1) player.gotPowerup();
    else if (action === 2) player.addCoin();

    player.print();

    if (player.status === "Dead") {
      clearInterval(interval);
      console.log("Game Over!");
      rl.close();
    }
  }, 1000);
});