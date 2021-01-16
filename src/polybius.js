// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // a function to encode or decode via a polybius square
  // parameters:
    // a message to be encoded or decoded
    // encode true/false. if true encode, if false decode
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    // in the interest of readability I made encoder and decoder seperate
    return (encode ? polybiusEncoder(input) : polybiusDecoder(input));
  }

  function polybiusDecoder(input) {
    const testForEven = input.split(' ');
    let testPass = true;
    
    // if each "word" of letters is not an even number of chars, return false
    testForEven.forEach(letterWord => {
      if (letterWord.length % 2) testPass = false;      
    });
    if (!testPass) return testPass;
    
    const inputArray = input.split('');
    const resultArray = [];
    // loop through the input message
    for (let i = 0; i < inputArray.length; i++) {
      // if it's a space, send it right through
      if (inputArray[i] === ' ') {
        resultArray.push(' ');
      } else {
        // grab the next two elements of the array
        const numberLetter = [inputArray[i], inputArray[i+1]];
        // since we're dealing with two elements at a time, if it's not a space
        // then we want to increment the index an additional time
        i++;
        // the try catch here will test if we're getting input that aligns with
        // the polybius square (throw is inside the helper function)
        // this will skip a non letter character and the next character
        try {
          resultArray.push(numbersToLetters(numberLetter));
        } catch (err) {
          console.error(err);
        }
      }
    }
    return resultArray.join('');
  }

  function polybiusEncoder(input) {
    const inputArray = input.split('');
    const resultArray = [];
    inputArray.forEach(letter => {
      // the try catch here will skip over non letters and let the code keep
      // running in the event of an error
      try {
      resultArray.push(LettersToNumbers(letter));
      } catch (err) {
        console.error(err);
      }
    })
    return (resultArray.join(''));
  }

  // a helper function for polybiusEncoder
  // made this its own function for readability, since the switch is so long
  function LettersToNumbers(letter) {
    let result = 0;
    if (letter === ' ') {
      return ' ';
    } else {
      switch (letter) {
        case 'a':
          result = 11;
          break;
        case 'b':
          result = 21;
          break;
        case 'c':
          result = 31;
          break;
        case 'd':
          result = 41;
          break;
        case 'e':
          result = 51;
          break;
        case 'f':
          result = 12;
          break;
        case 'g':
          result = 22;
          break;
        case 'h':
          result = 32;
          break;
        case 'i':
        case 'j':
          result = 42;
          break;
        case 'k':
          result = 52;
          break;
        case 'l':
          result = 13;
          break;
        case 'm':
          result = 23;
          break;
        case 'n':
          result = 33;
          break;
        case 'o':
          result = 43;
          break;
        case 'p':
          result = 53;
          break;
        case 'q':
          result = 14;
          break;
        case 'r':
          result = 24;
          break;
        case 's':
          result = 34;
          break;
        case 't':
          result = 44;
          break;
        case 'u':
          result = 54;
          break;
        case 'v':
          result = 15;
          break;
        case 'w':
          result = 25;
          break; 
        case 'x':
          result = 35;
          break;
        case 'y':
          result = 45;
          break;
        case 'z':
          result = 55;
          break;
        default:
          throw new Error(`'${letter}' is not a letter`);
      }
    }
    return result;
  }

  // a helper function for the decoder
  function numbersToLetters(codedLetter) {
    // the minus 1 here is to adjust to array indexes
    const first = codedLetter[0] - 1;
    const second = codedLetter[1] - 1;
    // if we're getting input that isn't in the polybius square
    // throw an error and skip it, this would be in the user input a negative
    // number or a number > 5
    if (first > 4 || first < 0) {
      throw new Error(`${first} is not between 0 and 4`)
    }
    if (second > 4 || second < 0) {
      throw new Error(`${second} is not between 0 and 4`)
    }
    const polybiusSquare = [
      ['a', 'f', 'l', 'q', 'v'],
      ['b', 'g', 'm', 'r', 'w'],
      ['c', 'h', 'n', 's', 'x'],
      ['d', 'i/j', 'o', 't', 'y'],
      ['e', 'k', 'p', 'u', 'z']
    ];
    return polybiusSquare[first][second];
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
