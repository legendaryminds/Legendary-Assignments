// ### **Sort by Property:**

// Write a function called **`sortByProperty`** that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
    // Sort the original array of objects based on the given property
    objects.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) {
            return -1; // a comes before b
        }
        if (a[propertyName] > b[propertyName]) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });

    return objects; // Return the sorted array
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge); 
// Output: 
// [
//     { name: 'Bob', age: 25 },
//     { name: 'David', age: 28 },
//     { name: 'Alice', age: 30 },
//     { name: 'Charlie', age: 35 }
// ]
