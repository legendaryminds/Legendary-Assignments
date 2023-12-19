// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type `number`:

function sum(x, y) {
  // Check data types first and throw error if not numbers
  if (typeof x !== "number" || typeof y !== "number") {
    throw Error("Both arguments must be of type number");
  }

  // Calculate and return the sum
  return x + y;
}

// console.log(sum(3, 4)); // Output: 7
console.log(sum("abc", 4));

// 1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. Use `console.log` within a `catch` block to inform the user of the error.

// try {
//   // Call the sum function with arguments "1" and "2"
//   const result = sum(1, '2');

//   // If the sum function executes successfully, log the result
//   console.log("Result:", result);
// } catch (error) {
//   // If an error occurs, log the error message
//   console.log("Error:", error.message);
// }


// 2a) Given a user object, write a function called `login` that takes a `username` and`password` as parameters.Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`

var user = { username: "sam", password: "123abc"};
function login(username, password) {
    //check credentials
    if (username !== user.username || password !== user.password) {
      throw Error("User name or password does not match, try again!");
    }
     console.log("Login Successful");
 }


// ​
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

// try {
//   login("sam", "123abc"); // Correct credentials
// } catch (error) {
//   console.log("Error:", error.message);
// }

// try {
//   login("john", "password123"); // Incorrect credentials, will throw an error
// } catch (error) {
//   console.log("Error:", error.message); // Logs 'Invalid username or password'
// }