const readline = require("readline-sync")

const playerName = readline.question("Hello! What is your name?")
console.log(`Welcome ${playerName} to the RPG game!!! `);

// function Character(name, healthPoints, attackPoints, inventory) {
//     this.name = name;
//     this.healthPoints = healthPoints;
//     this.attackPoints = attackPoints;
//     this.inventory = inventory;
//     this.printInventory = function (){
//         console.log(`Name:${this.name}`)∏
//         console.log(`Inventory:${this.inventory}`)
// }
// }

class Character{
    constructor(name, healthPoints, attackPoints, inventory) {
      this.name = name;
      this.healthPoints = healthPoints;
      this.attackPoints = attackPoints;
      this.inventory = inventory;
    }
    printInventory() {
        console.log(`inventory.${this.inventory}`)
    }
}

let playerInventory = ["bow", "sword", "ax", "rocket launcher"];

const hero = new Character(playerName, 100, 5, playerInventory);
const enemy1 = new Character("Tricky Tim", 25, 2, ["Tooth", "Bracelet"]);
const enemy2 = new Character("Lulu", 36, 3, ["Sword", "Necklace"]);
const enemy3 = new Character("Mickey", 18, 1, ["Ears"]);

console.log(hero);
console.log(enemy1);
// console.log(enemy2);
// console.log(enemy3);

let enemies = [enemy1, enemy2, enemy3];

// console.log(enemies);

// enemy1.printInventory()

// console.log(hero)

hero.printInventory();