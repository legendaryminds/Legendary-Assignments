// Challenge # 1

// In order to solve this problem I will need to:
// 1. Create two empty arrays, one for the indices of the -1s and another for the other numbers.
// 2. Iterate over the array and add the -1s to the first array and the other numbers to the second array.
// 3. Sort the second array.
// 4. Iterate over the first array and insert the -1s back into the positions they were in but now into the second array.
// 5. Return the second array.


function solution(arr) {
  // Create to new arrays
  const positionsOfMinusOnes = [];
  const otherNumbers = [];
// iterate over the array and add the -1s with their indices to the positionOfMinusOnes array and the other numbers to the otherNumbers array.
  arr.forEach((item, index) => {
    // if the item is -1, add the index to the positionsOfMinusOnes array
    if (item === -1) {
      positionsOfMinusOnes.push(index); 
      // .push() adds the index to the array 
    } else {
      otherNumbers.push(item);
      // .push() adds the number to the array
    }
  });

  // sort the second array in ascending order
  otherNumbers.sort((a, b) => a - b);
  // 

  // insert the -1s in their previous indices into the second array
  positionsOfMinusOnes.forEach((position) => {
    otherNumbers.splice(position, 0, -1);
    // .splice() adds the -1 to the indexed position in the array
  });

  return otherNumbers;
  // return the second array
}


// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
// console.log(solution([5, 3, 1])); // [1, 3, 5]
// console.log(solution([-1, -1, -1, -1])); // [-1, -1, -1, -1]
// console.log(solution([100, -1, 50, -1, 75])); // [50, -1, 75, -1, 100]


// I could have use a for loop instead of a forEach loop to iterate over the array.



// for (let index = 0; index < arr.length; index++) {
//     const item = arr[index];
//     if (item === -1) {
//         positionsOfMinusOnes.push(index);
//     } else {
//         otherNumbers.push(item);
//     }
// }



// Challenge # 2

// In order to solve this problem I will need to:
// Convert the string to lowercase to make the function case-insensitive
// Define the vowels
// Iterate throught the string and check if the character is a vowel
// If it is, add it to the vowels count
// Return the vowels count

function countVowels(str) {
  // Convert the string to lowercase to make the function case-insensitive
  str = str.toLowerCase();
  // 
  // Define the vowels
  const vowels = "aeiou";

  // Initialize a count variable
  let count = 0;
  // start the count at 0

  // Iterate through the string. Check if the character is a vowel and increase the count
  for (let char of str) {
    // 
    if (vowels.includes(char)) { 
      count++;
    }
  }
// Return the count
  return count;
}

// console.log(countVowels('Hello, World!')); // Output: 3
// console.log(countVowels('Counting Vowels')); // Output: 5

// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

// I want to iterate over each product using the .map()     
// Use template literals to input the name into the new array and create totalPriceArray by multiplying price by quantity

function calculateTotalPrice(products) {
  return products.map(product => `Name:${product.name} Total:${product.price * product.quantity}`);
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]