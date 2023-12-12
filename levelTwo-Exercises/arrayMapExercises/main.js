// 1) Make an array of numbers that are doubles of the first array
// 
// ES5:
// function doubleNumbers(arr) {
//   var doubledArray = arr.map(function (num) {
//     return num * 2;
//   });
//   return doubledArray;
// }

// ES6:
// const doubleNumbers = arr => arr.map(num => num * 2);

// console.log(doubleNumbers([2, 5, 100])); // Output: [4, 10, 200]



// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   // your code here
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function stringItUp(arr) {
//     var newString = arr.map(function(num) {
//         return String(num);
//         // or num.toString
//     })
//     return newString;
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // 3) Capitalize the first letter of each name and make the rest of the characters lowercase
// ES5:
// function capitalizeNames(arr) {
//     var capitalizedArray = arr.map(function (name){
//       return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     })
//     return capitalizedArray
// }

// ES6:
function capitalizeNames(arr) {
    // return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());

    var capitalizedArray = arr.map((name) => charAt(0).toUpperCase() + name.slice(1).toLowerCase())
}

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase
// ES5:
// function capitalizeNames(arr) {
//     var capitalizedArray = arr.map(function (name){
//       return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     })
//     return capitalizedArray
// }

// function capitalizeNames(arr) {
//     return arr.map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
// };

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]


// 4) Make an array of strings of the names
// ES5:
// function namesOnly(arr){
//     var famousPeeps = arr.map(function(person) {
//         return person.name
//     }); 

// ES6:
// const namesOnly = (arr) => {
//   const famousPeeps = arr.map((person) => person.name);
//     return famousPeeps;
//     console.log(famousPeeps);
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// ES5:
// function makeStrings(arr) {
//     return arr.map(function (person) {
//       if (person.age >= 18) {
//         return `${person.name} can go to The Matrix`;
//       } else {
//         return `${person.name} is under age!!`;
//       }
//     });
// }

// ES6:
// const makeStrings = (arr) => {
//   return arr.map((person)  => {
//     if (person.age >= 18) {
//       return `${person.name} can go to The Matrix`;
//     } else {
//       return `${person.name} is under age!!`;
//     }
//   });
//     return makeStrings
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
// ES5:
// function readyToPutInTheDOM(arr) {
//     return arr.map(function (person) {
//       return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
//     });
// }

// ES6:
// const readyToPutInTheDOM = (arr) => {
//   return arr.map((person) => {
//     return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
//   });
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]