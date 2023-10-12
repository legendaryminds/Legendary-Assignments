// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// var string = "Chocolate";
// var upperAndLower = string.toUpperCase().concat(string)
// console.log(upperAndLower)

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// > Hint: You'll need to use Math.floor().

// var string = ("fevers")
// x = Math.floor(string.length / 2);
// console.log(x)

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// var newString = upperAndLower.slice(-18, -9)
// console.log(newString);

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// > Hint: If your string length is odd, use Math.floor() to round down.

let string = "loversOnBike";
let length = string.length;
let newStr = "";

for (let k = 0; k < length / 2; k++) {
  newStr += string[k].toUpperCase();
}

for (k = length / 2; k < length; k++) {
  newStr += string[k].toLowerCase();
}
console.log(newStr)

// ### **Optional Code Challenge**

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

