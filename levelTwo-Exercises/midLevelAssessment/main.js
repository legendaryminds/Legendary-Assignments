// Challenge 1: Sorting an Array
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// const numbers = [4, 2, 7, 1, 9, 5];
// const sortedNumbers = sortNumbers(numbers);

// function sortNumbers(numbers) {
//     return numbers.sort(function (a, b) {
//      return a - b
//  })
// }
// // Example usage:
// // const numbers = [4, 2, 7, 1, 9, 5];
// // const sortedNumbers = sortNumbers(numbers);
// console.log(sortedNumbers); // Output: [1, 2, 4, 5, 7, 9]

// Challenge 2: Mapping an Array
// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

const strings = ["hello", "world", "javascript"];
const uppercaseStrings = convertToUppercase(strings);

function convertToUppercase(strings) {
  var uppercaseStrings = strings.map(function(str) {
    return str.toUpperCase();
  });
  return uppercaseStrings;
}

console.log(uppercaseStrings);
// Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


function convertToUppercase(strings) {
    const uppercaseStrings = strings.map(str => str.toUpperCase()); {
        return uppercaseStrings;
    };
}

console.log(uppercaseStrings); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
