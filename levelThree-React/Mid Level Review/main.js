// Challenge # 1

// In order to solve this problem I will need to:
// 1. Create to empty arrays, one for the indices of the -1s and another for the other numbers.
// 2. Iterate over the array and add the -1s to the first array and the other numbers to the second array.
// 3. Sort the second array.
// 4. Iterate over the first array and insert the -1s in the correct position of the second array.
// 5. Return the second array.


function solution(arr) {
  // Create to new arrays
  const positionsOfMinusOnes = [];
  const otherNumbers = [];
// iterate over the array and add the -1s with their indices to the first array and the other numbers to the second array.
  arr.forEach((item, index) => {
    if (item === -1) {
      positionsOfMinusOnes.push(index);
    } else {
      otherNumbers.push(item);
    }
  });

  // sort the second array in ascending order
  otherNumbers.sort((a, b) => a - b);

  // insert the -1s in their previous indices into the second array
  positionsOfMinusOnes.forEach((position) => {
    otherNumbers.splice(position, 0, -1);
  });

  return otherNumbers;
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(solution([5, 3, 1])); // [1, 3, 5]
console.log(solution([-1, -1, -1, -1])); // [-1, -1, -1, -1]
console.log(solution([100, -1, 50, -1, 75])); // [50, -1, 75, -1, 100]


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

  // Define the vowels
  const vowels = "aeiou";

  // Initialize a count variable
  let count = 0;

  // Iterate through the string. Check if the character is a vowel and increase the count
  for (let char of str) {
    if (vowels.includes(char)) { 
      count++;
    }
  }
// Return the count
  return count;
}

console.log(countVowels('Hello, World!')); // Output: 3
console.log(countVowels('Counting Vowels')); // Output: 5


