function sortByMultipleCriteria(people) {
  // Sort the array of people
  return people.sort((a, b) => {
    // First, compare by age in ascending order
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    // If ages are the same, compare by name in alphabetical order
    return a.name.localeCompare(b.name);
  });
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

// Sort people by age and then by name
const sortedPeople = sortByMultipleCriteria(people);

// Expected outcome:
// [
//   { name: 'Bob', age: 25 },
//   { name: 'David', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]
console.log(sortedPeople);
