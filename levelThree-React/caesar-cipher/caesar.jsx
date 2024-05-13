// Import the readline-sync package
var readline = require('readline-sync');

// Ask the user for the phrase to encrypt
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

// Ask the user for the number of letters to shift
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// Function to encrypt the input text using the Caesar cipher
function caesarCipher(text, shift) {
    // Initialize an empty string for the encrypted message
    var result = '';

    // Loop over each character in the input text
    for (var i = 0; i < text.length; i++) {
        var char = text[i];

        // Check if the character is a letter
        if (char.match(/[a-z]/i)) {
            // Get the character code of the letter
            var code = text.charCodeAt(i);

            // Shift the letter within the bounds of 'a' to 'z'
            // Check if the letter is lowercase (97 is the char code for 'a')
            if ((code >= 97) && (code <= 122)) {
                // Shift the character and wrap around using modulo if it goes past 'z'
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        // Append the encrypted/unchanged character to the result
        result += char;
    }

    return result;
}

// Encrypt the input using the caesarCipher function
var encrypted = caesarCipher(input, shift);

// Output the encrypted text
console.log('Encrypted Message:', encrypted);
