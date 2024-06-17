// Function to extract unique characters from an array of strings
function extractUniqueCharacters(strings) {
    // Set to store unique characters
    const uniqueCharsSet = new Set();

    // Sets in JavaScript are collections of values where each value must be unique. This property of Sets automatically handles duplicate values for you.

    // Loop through each string
    strings.forEach(str => {
        // Loop through each character in the string
        for (let char of str) {
            // Add character to the set
            uniqueCharsSet.add(char);
        }
    });

    // Convert set to array and return
    return Array.from(uniqueCharsSet);
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); 
// Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']
