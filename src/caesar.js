// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // a function to encode or decode a caesar shift
  // parameters:
    // a message (either coded or readable)
    // a number to shift (how many spots to adjust letters in message)
    // encode true/false. if encoding true, if decoding false
  function caesar(input, shift, encode = true) {
    // the shift should exist and be between -25 and 25
    if ((!shift) || (Math.abs(shift) > 25)) return false;
    const originalArray = input.split('');
    const resultArray = [];
    // if we're decoding, shift the opposite way
    if (!encode) { shift = 0 - shift };
    originalArray.forEach(character => {
      let characterValue = shift;

      // OUTER SWITCH
      // this cascading switch adds characters' normal index in the alphabet
      // then numbers are checked for being too small or large and adjusted
      switch(character.toLowerCase()) {
        case 'z':
          characterValue++;
        case 'y':
          characterValue++;
        case 'x':
          characterValue++;
        case 'w':
          characterValue++;
        case 'v':
          characterValue++;
        case 'u':
          characterValue++;
        case 't':
          characterValue++;
        case 's':
          characterValue++;
        case 'r':
          characterValue++;
        case 'q':
          characterValue++;
        case 'p':
          characterValue++;
        case 'o':
          characterValue++;
        case 'n':
          characterValue++;
        case 'm':
          characterValue++;
        case 'l':
          characterValue++;
        case 'k':
          characterValue++;
        case 'j':
          characterValue++;
        case 'i':
          characterValue++;
        case 'h':
          characterValue++;
        case 'g':
          characterValue++;
        case 'f':
          characterValue++;
        case 'e':
          characterValue++;
        case 'd':
          characterValue++;
        case 'c':
          characterValue++;
        case 'b':
          characterValue++;
        case 'a':
          characterValue++;

          // this is handling for shifts that move beyond the alphabet
          // if moving a-z, it should wrap around to a and keep going
          // if moving z-a, it should wrap around to z and keep going
          if (characterValue <= 0) characterValue += 26;
          if (characterValue > 26) characterValue -= 26;
          
          // INNER SWITCH
          // this switch assigns new letters based on the value of
          // the letter's normal index +/- the shift
          switch(characterValue) {
            case 1:
              resultArray.push('a');
              break;
            case 2:
              resultArray.push('b');
              break;
            case 3:
              resultArray.push('c');
              break;
            case 4:
              resultArray.push('d');
              break;
            case 5:
              resultArray.push('e');
              break;
            case 6:
              resultArray.push('f');
              break;
            case 7:
              resultArray.push('g');
              break;
            case 8:
              resultArray.push('h');
              break;
            case 9:
              resultArray.push('i');
              break;
            case 10:
              resultArray.push('j');
              break;
            case 11:
              resultArray.push('k');
              break;
            case 12:
              resultArray.push('l');
              break;
            case 13:
              resultArray.push('m');
              break;
            case 14:
              resultArray.push('n');
              break;
            case 15:
              resultArray.push('o');
              break;
            case 16:
              resultArray.push('p');
              break;
            case 17:
              resultArray.push('q');
              break;
            case 18:
              resultArray.push('r');
              break;
            case 19:
              resultArray.push('s');
              break;
            case 20:
              resultArray.push('t');
              break;
            case 21:
              resultArray.push('u');
              break;
            case 22:
              resultArray.push('v');
              break;
            case 23:
              resultArray.push('w');
              break;
            case 24:
              resultArray.push('x');
              break;
            case 25:
              resultArray.push('y');
              break;
            case 26:
              resultArray.push('z');
              break;
          }
        // BACK TO THE OUTER SWITCH
        break;
        default:
          // this should be anything that isn't a letter
          // it should travel straight through without being manipulated
          resultArray.push(character);
      }
    });
    return resultArray.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
