// You should use multiple array methods to solve these problems. Don't use `for` loops!

// Using the provided `peopleArray` (bottom of this article), write a function that:

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

// Example

// var peopleArray = [
//   {
//     firstName: "Sarah",
//     lastName: "Palin",
//     age: 47,
//   },
//   {
//     firstName: "Frank",
//     lastName: "Zappa",
//     age: 12,
//   },
//   {
//     firstName: "Rick",
//     lastName: "Sanchez",
//     age: 78,
//   },
//   {
//     firstName: "Morty",
//     lastName: "Smith",
//     age: 29,
//   },
//   {
//     firstName: "Kyle",
//     lastName: "Mooney",
//     age: 27,
//   },
//   {
//     firstName: "Pasha",
//     lastName: "Datsyuk",
//     age: 13,
//   },
//   {
//     firstName: "Lev",
//     lastName: "Tolstoy",
//     age: 82,
//   },
// ];

// // function sortedOfAge(arr) {
// //   return arr.filter(function (ofAge) {
// //     if (ofAge.age >= 18) return "ofAge";
// //   });
// //      return arr.sort(function (a, b) {
// //         return a.lastName - b.lastName;
// // })
// // }

// function sortedOfAge(arr) {
//   return arr
//     .filter(function (person) {
//       return person.age >= 18;
//     })
//     .sort(function (a, b) {
//       // Compare last names as strings
//       if (a.lastName < b.lastName) return -1;
//       if (a.lastName > b.lastName) return 1;
//       return 0;
//     })
//     .map(function (person) {
//       // Format the output as HTML list items
//       return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`;
//     });
// }


// console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/

// # **Extra Credit**

// - Create another array of one or more individuals and add it to the original array.
// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// - Remove the second individual from the array.
// - Return the array in reverse order.


// Extra Credit Answer:

var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

// Add another individual to the original array
peopleArray.push({
  firstName: "John",
  lastName: "Doe",
  age: 40,
});

function filterAndReverse(arr) {
  // Create a function that filters out people whose last names end with "y" or "a"
  var filteredArray = arr.filter(function (person) {
    return !["y", "a"].includes(person.lastName.toLowerCase().slice(-1));
  });

  // Remove the second individual from the array
  filteredArray.splice(1, 1);

  // Return the array in reverse order
  return filteredArray.reverse();
}

console.log(filterAndReverse(peopleArray));


// Provided Array

// var peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]
