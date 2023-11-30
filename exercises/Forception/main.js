function forception(people, alphabet) {
  const result = [];

  for (let i = 0; i < people.length; i++) {
    result.push(people[i] + ":");

    for (let j = 0; j < alphabet.length; j++) {
      result.push(alphabet[j].toUpperCase());
    }
  }

  return result;
}

// Example usage:
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var resultArray = forception(people, alphabet);
console.log(resultArray);
