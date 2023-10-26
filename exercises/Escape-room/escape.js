const readline = require("readline-sync"); //variable created to use readline-sync package from npm install
const playerName = readline.question("Hello! What is your name? "); //readline-sync question that prompts the user with a question

const getRandomNumber = (min,max) => {
    return Math.floor(Math.random()* (max - min + 1) + min);
};

let isGameRunning = true;

console.log(`Welcome ${playerName} to the Escape Room!!! ${playerName} you are locked in a room. In order to escape the room, you need to find the key to unlock the door.`) 

let roomItems = ["Desk", "Cushioned Chair", "Rug", "Cabinet", "Hole in Wall", "Trinket Box on Desk", "Love Seat"]

while (isGameRunning){
    let action = readline.question("What would you like to do? Press [s] to see what is in the room, [e] to explore the room, [q] to quit.  ",
        { limit: ["s", "e", "q"] }
    );
    if(action === "s") {
      console.log(roomItems);
    } else if (action === "e") {
        console.log("You chose to explore.");
        
        let exploreRoom = getRandomNumber(1,7)
        console.log(exploreRoom);

        if (exploreRoom === 1) {
          console.log("You looked in desk. No key was found");
        } else if (exploreRoom === 2) {
          console.log("You looked in cabinet. No key was found");
        } else if (exploreRoom === 3) {
          console.log("You looked under rug. No key was found");
        } else if (exploreRoom === 4) {
            console.log("You looked under chair cushion. Key was found! You have unlocked the door. Congratulations!!! You have escaped the room")
                isGameRunning = false;;
        } else if (exploreRoom === 5) {
          console.log(
              "You put hand in hole in the wall. You have chosen unwisely and have been bitten by a spider. You are dying rapidly. Game over.")
              isGameRunning = false;
        } else if (exploreRoom === 6) {
          console.log("You looked in trinket box. No key was found");
        } else if (exploreRoom === 7) {
          console.log("You looked in love seat. No key was found");
        }

    } else if (action === "q") {
        console.log("You chose to quit")
      isGameRunning = false;
    }
}

// console.log(action)
//console logs a message using the user playerName

// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

// # **Game start:**

// Tell the user their options:

// 1. Find the key, or
// 2. Put hand in hole
// 3. Open the door
    
// const items = ["Desk", "Cushioned Chair", "Rug", "Cabinet", "Hole in Wall", "Trinket Box on Desk", "Love Seat"];   

// for (var i = 0; i < items.length; i++){
//     if (items[i] === "Hole in Wall") {
//         console.log(
//           "You have chosen unwisely and have been bitten by a spider. You are dying rapidly. Game over."
//         )
//         {
//             console.log(items[i])
//         }
//     }
// }
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

// They can't open the door unless they find the key first.They die if they put their hand in the hole.

// # **JavaScript tools that may help**

// - while loop
// - variables
// - booleans
// - if/else if/else OR switch statement
// - `readline-sync` (syntax for installing and using below)

//Would you like to look around for the key? 

// if yes, list items in room
// if no, please type "ready" when you are?

//Items in room: Desk, Cushioned Chair, Rug, Cabinet, Hole in Wall, Trinket Box on Desk, Love Seat

//Where would you like to look first?
//if hole console log "You have chosen unwisely and have been bitten by a spider. You are dying rapidly. Game over.
// if under cushion of chair Key has been found, would you like to try the key in the door? Yes or No?
//if yes, console log, "You have successfully escaped the room",
// else console log, "Sorry no key here, where would you like to look next?"