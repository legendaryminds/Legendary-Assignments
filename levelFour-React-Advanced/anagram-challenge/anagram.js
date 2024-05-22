function sortCharacters(word) {
  // Takes a word as input, splits it into characters, sorts the characters, and joins them back into a string
  return word.split("").sort().join("");
}

function filterAnagrams(arr, target) {
  // Sort the characters of the target word
  const sortedTarget = sortCharacters(target);
  // Filter the array to include only words that, when sorted, match the sorted target word
  return arr.filter((word) => sortCharacters(word) === sortedTarget);
}

// Example usage
const words = ["listen", "silent", "dog", "god", "hello", "world"];
const target = "enlist";

// Find anagrams of the target word in the words array
const anagrams = filterAnagrams(words, target);

// Output: ['listen', 'silent']
console.log(anagrams);
