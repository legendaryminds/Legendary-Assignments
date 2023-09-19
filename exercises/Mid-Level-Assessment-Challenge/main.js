//Problem Solving Process
// Step 1: Identify the Problem
// Step 2: Make a Plan
// Step 3: Execute the code
// Step 4: Review or test the code
//Repeat until solution is reached

// for loop to loop through numbers to find even numbers
// if  statements to check for even numbers



function findEvenNumbers(arr) {// The value of arr is whatever we pass in
    let evenNumbers = [];
    for (var i = 0; i < arr.length; i++) {
        const number = arr[i]
        if (number % 2 === 0) {
            evenNumbers.push(number)
        }
    }
    return evenNumbers
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // Expected Output:  [2,4,6,8,10]

console.log(findEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])) // Expected Output:  [22, 44, 66, 88, 100]

//Vocabulary
//1. Parameter - Place holder 
//2. Argument -  The value passed into the parameter
//3. Remainder - %