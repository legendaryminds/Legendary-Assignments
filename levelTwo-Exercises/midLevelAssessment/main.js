// Challenge 1: Sorting an Array
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);

ES5
function sortNumbers(numbers) {
    return numbers.sort(function (a, b) {
     return a - b
 })
}

// ES6
// const sortNumbers = (numbers) => [...numbers].sort((a, b) => a - b);

// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [1, 2, 4, 5, 7, 9]

// Challenge 2: Mapping an Array
// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

// const strings = ["hello", "world", "javascript"];
// const uppercaseStrings = convertToUppercase(strings);
// 
ES5
function convertToUppercase(strings) {
  const uppercaseStrings = strings.map(function(str) {
    return str.toUpperCase();
  });
  return uppercaseStrings;
}

console.log(uppercaseStrings);
// // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// ES6
// function convertToUppercase(strings) {
//     const uppercaseStrings = strings.map(str => str.toUpperCase()); {
//         return uppercaseStrings;
//     };
// }

// console.log(uppercaseStrings); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// Challenge 3:
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);

ES5
function filterEvenNumbers(numbers) {
  return numbers.filter(function (num) {
    return num % 2 === 0;
  });
}

// ES6
// function filterEvenNumbers(numbers) {
//   return numbers.filter(num => num % 2 === 0)
// }

console.log(evenNumbers);  // Output: [2, 4, 6]