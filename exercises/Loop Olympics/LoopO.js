// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.

// for (var i = 0; i <= 9; i++){
//     console.log(i)
// }


// 2. Write a for loop that prints to the console 9 through 0.

// for (var i = 9; i >= 0; i--){
//     console.log(i)
// }

// 3. Write a for loop that prints these fruits to the console.`

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }

// ---

// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.

// num = []
// for (var i = 0; i <= 9; i++)
//     num.push(i); {
//     console.log(num)
// }


// 2. Write a for loop that prints to the console only even numbers 0 through 100.

// for (var i = 0; i <= 100; i+=2){
//     console.log(i)
// }
    

// 3. Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i <= fruit.length[i]; i += 2)
//     fruit.push(i); {
//     console.log(fruit)
// }


// # **Silver Medal**


const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations


// 1. Write a loop that will print out all the names of the people of the people array

// for (var i = 0; i < peopleArray.length; i++){
//     console.log(peopleArray[i].name)
// }


// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.

// const names = []
// const occupations = []

// for (var i = 0; i < peopleArray.length; i++)
//      {
//     names.push(peopleArray[i].name)
//     occupations.push(peopleArray[i].occupation)
// }
// console.log(occupations)

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// const names = []
// const occupations = []

// for (var i = 0; i < peopleArray.length; i++){
//     if (i % 2 === 0) {
//         names.push(peopleArray[i].name);
//     } else {
//         occupations.push(peopleArray[i].occupation);
//     }
    // if (0 % 2 === 0) names.push(peopleArray[i].name)
    // else occupations.push(peopleArray[i].occupation)
// }
// console.log(occupations)
// if (0 % 2 === 0) console.log ("true")

// # **Gold Medal - Nesting**

// 1. Create an array that mimics a grid like the following using nested `for` loops:

// ```jsx
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// ```
// const matrix = []
// for (var i = 0; i < 3; i++){
//     matrix.push([]);
//     for (var j = 0; j < 3; j++){
//         matrix[i].push(0)
//     }
// }
// console.log(matrix)

// 2.Create an array that mimics a grid like the following using nested `for` loops:

// ```jsx
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// ```
// const matrix = [];
// for (var i = 0; i < 3; i++) {
//   matrix.push([]);
//   for (var j = 0; j < 3; j++) {
//     matrix[i].push(i);
//   }
// }
// console.log(matrix);

// 3.Create an array that mimics a grid like the following using nested `for` loops:

// [
//   [0, 1, 2],
//   [0, 1, 2],
//   [0, 1, 2],
// ];

const matrix = [];
for (var i = 0; i < 3; i++) {
  matrix.push([]);
  for (var j = 0; j < 3; j++) {
    matrix[i].push(j);
  }
}
console.log(matrix);

// 1. Given a grid like the previous ones, write a nested `for` loop that would change every number to an x.

// ```jsx
// var grid = [["x", ...],
//             ["x", ...],
//             ["x",...], ...]

// ```