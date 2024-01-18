// 1. Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Answer:
// function collectAnimals(...animals
// ) {
//     return(animals)
// }

// let animalsArr = collectAnimals("dog", "cat", "mouse", "jackolope",
//     "platypus");

// console.log(animalsArr)

// 2. Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }
// Answer:
// function combineFruit(fruit, sweets, vegetables) {
//   return { fruit, sweets, vegetables };
// }

// let combinedFood = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]);
// console.log(combinedFood);

// 3. Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence(_________) {
//   return `We're going to have a good time in ${location} for ${duration}`;
// }

// parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks",
// });
// Answer:
// function parseSentence({location, duration}) {
//   return `We're going to have a good time in ${location} for ${duration}`;
// }

// let sentence = parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks",
// });

// console.log(sentence)

// 4.Use array destructuring to make this code ES6:
// function returnFirst(items) {
//   const firstItem = items[0]; /*change this line to be es6*/
//   return firstItem;
// }

// Answer:
// function returnFirst(items) {
//   const[firstItem] = items; /*change this line to be es6*/
//   return firstItem;
// }

// 5. Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

// Answer:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     let [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, " + ${firstFav} + ", " + ${secondFav} + ", and " + ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// 6. Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals() {

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Answer:
// function combineAnimals(...allAnimals) {
//     return[].concat (...allAnimals)
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// let animalsArr = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// console.log(animalsArr)

// 7. Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//   var numbers = [a, b, c, d, e];

//   return numbers.reduce(function (acc, number) {
//     return acc * number;
//   }, 1);
// }
// Answer:
// const product = (a, b, c, d, e) => {
//   let numbers = [a, b, c, d, e];

//  return numbers.reduce((acc, number) => acc * number, 1);
// }
// console.log(product(10, 12, 3, 49, 50));

//8. Make the following function more ES6y. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }
//  Answer:
// function unshift(array, ...rest) {
//   return [...rest, ...array];
// }
// console.log(unshift([4, 5, 6], 1, 2, 3));

// 9. Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

// function populatePeople(names){
//     return names.map((name) => {
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
// ]

// Answer:
// function populatePeople(names){
//     return names.map((name) => {
//         let [firstName, lastName] = name.split(" ");
//         return {
//             firstName,
//             lastName
//         }
//     })
// }

// const output = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
// console.log(output)