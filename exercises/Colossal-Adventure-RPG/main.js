const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
console.log(
  `Welcome ${playerName} to the Enchanted Forest Game !!! 
  ${playerName} you have found yourself awaken into a mystical enchanted forest.
  As you discover who you are & where you are, you may come across many friends and foes!
  Your goal is to defeat your enemies and gather as many treasures as possible.
  Whoever stands true at the end is the victor. You can type "print" any time to see you stats.
  Good luck and MAY THE ODDS BE IN YOUR FAVOR!!
  
  `
);

let isGameRunning = true;

class Character {
  constructor(name, healthPoints, attackPoints, inventory) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.inventory = inventory;
  }
  printInventory() {
    console.log(`Here is your inventory.${this.inventory}`)
    console.log();
  }
}

let playerInventory = [ " Wood Wand"," Wood Shield", " Sleep Potion", " Healing Stone", " Dagger", " Wood Sword"];

const hero = new Character(playerName, 111, 9, playerInventory);
const enemy1 = new Character("Witch Hazel", 33, 6, [" Hazel Wood Wand", " Poison Apple"]);
const enemy2 = new Character("Gandolf the Black", 66, 4, [" Dark Crystal Wand", " Black Grimore", " Dragon's Tooth"]);
const enemy3 = new Character("Nimrod the Dragon", 99, 7, [" Breath of Fire Spell", " Acid Tongue Charm", " Paralysis Spell"]);

let enemies = [enemy1, enemy2, enemy3];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function printPlayerInfo() {
  console.log(`
    Player Information:
    Name: ${hero.name}
    Health Points: ${hero.healthPoints}
    Inventory: ${hero.inventory.join(", ")}
  `);
}

class Helper extends Character {
  constructor(name, healthPoints, gifts) {
    super(name, healthPoints, 0, []);
    this.gifts = gifts;
  }

  offerGift() {
    console.log();
    console.log(`${this.name} offers you some gifts! Choose one:`);
    for (let i = 0; i < this.gifts.length; i++) {
      console.log(`${this.gifts[i]}`);
    }

    const giftIndex = readline.keyInSelect(this.gifts, "Choose a gift:");

    if (giftIndex !== -1) {
      const chosenGift = this.gifts[giftIndex];
      hero.inventory.push(chosenGift);
      console.log(`You have received ${chosenGift} from ${this.name}!`);
      console.log();
    }
  }
}

const helper1 = new Helper("Belinda The Good Witch", 50, [
  " Healing Potion x2", " Magick Scroll", " Step Softly Spell",
]);

const helper2 = new Helper("Lady Sassafras", 50, [
  " Golden Wand",
  " Magic Scroll",
  " Odds In Your Favor Charm",
]);

const helper3 = new Helper("Gandolf The White", 50, [
  " Golden Sword",
  " Invisability Cloak",
  " Healing Potion x3",
]);

let helpers = [helper1, helper2, helper3];


while (isGameRunning) {
  
  if (enemies.length === 0) {
    console.log(`Congratulations ${hero.name}! You have defeated all the evil doers in the land! YOU WIN!!!`
    );
    process.exit();
  }
  let action = readline.question(
    "What would you like to do? Press[w] to walk, [i] to see your inventory, [q] to quit.  ",
    { limit: ["w", "i", "q", "print"] }
  );

  if (action === "print") {
    printPlayerInfo();
    continue;
  }

  if (action === "w") {
    console.log("You chose to walk around the enchanted forest.");
    console.log();

  let eventChance = getRandomNumber(1, 4);

    
    if (eventChance === 2) {
      if (helpers.length > 0) {
        let randomHelperIndex = getRandomNumber(0, helpers.length - 1);
        let currHelper = helpers[randomHelperIndex];
        console.log(`${currHelper.name} has appeared!`);
        currHelper.offerGift();
        helpers.splice(randomHelperIndex, 1);
      }
} else if (eventChance === 3) {
  let randonEnemyIndex = getRandomNumber(0, enemies.length - 1);
  let currEnemy = enemies[randonEnemyIndex];
  console.log(`${currEnemy.name} has appeared!`);

  const options = ["fight", "run"];

  let fightOrRun = readline.keyInSelect(
    options,
    "Do you want to fight or run??"
  );
  console.log(options[fightOrRun]);
  if (options[fightOrRun] === "fight") {
    fight(currEnemy);
  } else if (options[fightOrRun] === "run") {
    run(currEnemy);
  }
}
  } else if (action === "i") {
    hero.printInventory();
  } else if (action === "q") {
    isGameRunning = false;
  }
}

function fight(currEnemy) {
  while (hero.healthPoints > 0 && currEnemy.healthPoints > 0) {
    const damage = getRandomNumber(1, hero.attackPoints);
    currEnemy.healthPoints -= damage;
    console.log(
      `${currEnemy.name} took ${damage} damage! ${currEnemy.name} is now at ${currEnemy.healthPoints}`
    );

    if (currEnemy.healthPoints <= 0) {

      console.log();
      console.log(
        `Congrats, you have defeated ${currEnemy.name}! You have been rewarded a precious item!`
      );
      console.log();
      

      if (currEnemy.inventory.length > 0) {
        const itemIndex = getRandomNumber(0, currEnemy.inventory.length - 1);
        const chosenItem = currEnemy.inventory[itemIndex];

        hero.inventory.push(chosenItem);
        console.log(
          `You have obtained ${chosenItem} from ${currEnemy.name}'s inventory.`
        );
        console.log();
          currEnemy.inventory.splice(itemIndex, 1);
      }
      // hero.inventory = hero.inventory.concat(currEnemy.inventory);
      const healthBonus = getRandomNumber(10, 20);
      hero.healthPoints += healthBonus;
  
      console.log(`You have been awarded ${healthBonus} health points! ${hero.name} is now at ${hero.healthPoints}`
      );
      console.log();

      enemies = enemies.filter((item) => item.name !== currEnemy.name);
    } else {
      const enemyDamage = getRandomNumber(1, currEnemy.attackPoints);
      hero.healthPoints -= enemyDamage;
      console.log(
        `${currEnemy.name} dealt ${enemyDamage} damage! ${hero.name} is now at ${hero.healthPoints}`
      );
    }

    if (hero.healthPoints <= 0) {
      console.log();
      console.log(`Sorry, you've been defeated!!`);
      isGameRunning = false;
    }
  }
}

  function run(currEnemy) {
    console.log(`You Chose to Run from ${currEnemy.name}`);
    console.log();
    let escapeChance = getRandomNumber(1, 2)
    if (escapeChance === 1) {
      console.log(`Congrats ${hero.name}, you have escaped the clutches of ${currEnemy.name}`);
    } else if (escapeChance === 2) {
      console.log(`Unfortunately, you tripped and fell and did not get away!!! Prepare to fight ${currEnemy.name}`);
      console.log();
      fight(currEnemy);
    }
  }