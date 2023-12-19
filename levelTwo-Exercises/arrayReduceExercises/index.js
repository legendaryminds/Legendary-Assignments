1) Turn an array of numbers into a total of all the numbers

ES5
function total(arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

ES6
function total(arr) {
   return arr.reduce((total, num) => total + num, 0);
}

// 2) Turn an array of numbers into a long string of all those numbers.

ES5
function stringConcat(arr) {
return arr.reduce(function (acc, num) {
  return acc + num;
}, "");
}

// ES6
function stringConcat(arr) {

}

Or use join:
function stringConcat(arr) {
  return arr.join("");
}

console.log(stringConcat([1,2,3])); // "123"e.log(total([1,2,3])); // 6

// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
   return arr.reduce(function (acc, voter) {
     return acc + (voter.voted ? 1 : 0);
   }, 0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7
// Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
function totalVotes(arr) {
  return arr.filter((voter) => voter.voted).length;
}

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
ES5
function shoppingSpree(arr) {
   return arr.reduce(function (total, wishlist) {
      return total + (wishlist.price);
   }, 0);
}

// ES6

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array**

ES5
function flatten(arr) {
  return arr.reduce(function (flat, currentArray) {
    return flat.concat(currentArray);
  }, []);
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// > Note: Take a look at Array.concat() to help with this one
// >

// 6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  return arr.reduce(
    function (acc, person) {
      if (person.age >= 18 && person.age <= 25) {
        acc.numYoungPeople++;
        if (person.voted) {
          acc.numYoungVotes++;
        }
      } else if (person.age >= 26 && person.age <= 35) {
        acc.numMidsPeople++;
        if (person.voted) {
          acc.numMidVotesPeople++;
        }
      } else if (person.age >= 36 && person.age <= 55) {
        acc.numOldsPeople++;
        if (person.voted) {
          acc.numOldVotesPeople++;
        }
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
