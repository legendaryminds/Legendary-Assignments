In order to make this work I must run:

node caesar.jsx

The number 97 is the Unicode (and ASCII) code point for the lowercase letter 'a'. ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent text in computers, telecommunications equipment, and other devices that use text. 

lower case letters start at 97
upper case letters start at 65

These character codes are very useful in programming because they allow you to perform operations on characters just like you would with numbers. This includes sorting, converting to uppercase or lowercase, and in cases like your Caesar cipher, encoding text by shifting characters.

parseInt() convert the users input from a string to an integer, which in this case is used in the shifting process

match() checks if the letter/char is between a-z, if it's not a letter it will return null and if so, the if not it will skip over that number