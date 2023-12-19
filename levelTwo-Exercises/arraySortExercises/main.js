1) Sort an array from smallest number to largest
ES5
function leastToGreatest(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ES6
const leastToGreatest = arr => arr.sort((a, b) => a - b); 

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

2) Sort an array from largest number to smallest
ES5
function greatestToLeast(arr) {
    return arr.sort(function (a, b) {
      return b - a;
    });
  }

ES6;
const greatestToLeast = (arr) => arr.sort((a, b) => b - a);

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

3) Sort an array from shortest string to longest
ES5
function lengthSort(arr) {
    return arr.sort(function (a, b) {
      return a.length - b.length
  })
}

ES6

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

4) Sort an array alphabetically
ES5
function alphabetical(arr) {
    return arr.sort(function (a, b) {
    return a.localeCompare(b)
})
}

ES6

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

5) Sort the objects in the array by age
function byAge(arr){
    return arr.sort(function (a, b) {
      return arr (a.age - b.age)
  })
}

ES5


ES6
const byAge = (arr) => arr.sort((a, b) => a.age - b.age);


console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));