### Challenge 1: S**ort Array with Preserved Index for -1 Values**

You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

All non -1 values in the array should be sorted in ascending order.
The -1 values should retain their original index positions in the sorted array.

function solution(arr){

}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))

### Challenge 2: **Count Vowels**

Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution.

const input = 'Hello, World!';

console.log(countVowels(input)); // Output: 3

const input = 'Counting Vowels';

console.log(countVowels(input)); // Output: 5

