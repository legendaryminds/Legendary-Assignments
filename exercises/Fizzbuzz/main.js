// // Write a short program that prints each number from 1 to 100 on a new line.
// /*For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
// Example:
// 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect.
// Optional:
// Write a function that keeps a tally of how often the phrases "fizz","buzz", and "fizzbuzz" occur in the array returned from the previous function.
// It should return an object that looks like this:
// {
//     fizzbuzz: 6,
//     fizz: 27,
//     buzz: 14

var fizzCount = 0;
var buzzCount = 0;
var fizzBuzzCount = 0;

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz"); fizzBuzzCount++;
    }
    else if (i % 3 == 0) {
        console.log("Fizz"); fizzCount++;
    }
    else if (i % 5 == 0) {console.log("Buzz"); buzzCount++;
}
            else console.log(i);
}

console.log('Fizz Count:', fizzCount);
console.log('Buzz Count:', buzzCount);
console.log('FizzBuzz Count:', fizzBuzzCount);


