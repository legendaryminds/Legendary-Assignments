// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// // test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

// 1. make and varible of an array of numbers the numbers.
// 2. write a function that loops through the array of those numbers.
// 3. 


var numArray1 = [6, 13, 250, 3];
var numArray2 = [3, 5, 2, 8, 1];
var numArray3 = [-13, 40, 3, 0, 19, 22];
var largest = numArray1[0]; 

// for (var i = 1; i < numArray1.length; i++) {
//   if (numArray1[i] > largest) {
//     largest = numArray1[i];
//   }
// }

// for (var i = 1; i < numArray2.length; i++) {
//   if (numArray2[i] > largest) {
//     largest = numArray2[i];
//   }
// }

// for (var i = 1; i < numArray3.length; i++) {
//   if (numArray3[i] > largest) {
//     largest = numArray3[i];
//   }
// }

// console.log(largest);




// Write a function that takes an array of words and a character and returns each word that has that character present.
// // test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// Make Variable with of array in console.log
// use lettersWithStrings
// 1. returns words with both ! and e, and must be in the array 
// 2. returns words with ! but must be in the array
// 3. returns open array



function lettersWithStrings(wordsArray, letter) {
  const result = wordsArray[0].filter((word) => {
    return word.includes(letter) && word.includes("!");
  });

  console.log(result);
}

// const wordsArray = [["$hello!", "%%^%%", "test!"], "!"];
// lettersWithStrings(wordsArray, "e");

// const wordsArray = [["#3", "$$$", "C%4!", "Hey!"], "!"];
// lettersWithStrings(wordsArray, "!");

// const wordsArray = [["yellow", "green", "^up^", "down", "dog"], "h"]
// lettersWithStrings(wordsArray);



// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false


function isDivisible(num1, num2) {
  return num1 % num2 === 0;
}

console.log(isDivisible(4, 2)); 
console.log(isDivisible(9, 3)); 
console.log(isDivisible(15, 4)); 
