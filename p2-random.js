/*
    CIT 281 Project 1
    Name: Myles Davis
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomLetterString() 
{
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let  randomLetterString = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    randomLetterString += getRandomLetter();
}

console.log(randomLetterString);
}

//getRandomLetter divides the work of the first function into seperate pieces, this one returning a single random lower case letter.
function getRandomLetter()
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(1, alphabet.length-1)]; 
}
// test with randomLetterString();

//This is a 'refactoring' again to split the duty into more functions that can be called individuallty. 
function getRandomString(minLength, maxLength)
{
    let randomString = "";
    for (let i = 0; i < getRandomInteger(10, 20); i++) {
        randomString += getRandomLetter();
    }
    console.log(randomString);
}
console.log(getRandomString(10, 20));


function getSortedString(string)
{
    console.log(string.split('').sort().join(''));
} 

//test with getSortedString("ewqbqrdkijpqtng");