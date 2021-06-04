/*
    CIT 281 Project 1
    Name: Myles Davis
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

const randomLetterString = function () 
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let  randomString = "";

    for (let i = 0; i < getRandomInteger(5, 26); i++) {
        randomString += getRandomLetter();
    }
    console.log(randomString);
    return randomString;
}

//getRandomLetter divides the work of the first function into seperate pieces, this one returning a single random lower case letter.
const getRandomLetter = function ()
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(1, alphabet.length-1)]; 
}
// test with randomLetterString();

//This is a 'refactoring' again to split the duty into more functions that can be called individuallty. 
const getRandomString = function (minLength, maxLength)
{
    let randomString = "";
    for (let i = 0; i < getRandomInteger(10, 20); i++) {
        randomString += getRandomLetter();
    }
    console.log(randomString);
    return randomString;
}
// test with console.log(getRandomString(10, 20));

//this function splits the string into an array, sorts it by alphabetical (default), then joins it again
const getSortedString = function (string)
{
    console.log(string.split('').sort().join(''));
}

//test with randomLetterString();
//test with getSortedString(getRandomString());