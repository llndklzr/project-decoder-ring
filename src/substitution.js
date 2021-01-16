// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // test for if whether an alphabet argument was sent
    if (!alphabet) return false;
    // test for alphabet length
    if (alphabet.length !== 26) return false;
    const alphabetArray = alphabet.split('');

    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    // test for alphabet unique characters
    let uniqueTest = true;
    alphabetArray.forEach(character => {
      const uniqueList = alphabetArray.filter(element => element === character);
      if (uniqueList.length > 1) uniqueTest = false;
    });
    if (!uniqueTest) return uniqueTest;
    
    const inputArray = input.split('');

    // encoding and decoding can be done with the same helper function
    // if the arguments are sent to different parameters in the function
    return (encode ? subDecoderEncoder(inputArray, englishAlphabet, alphabet)
                   : subDecoderEncoder(inputArray, alphabet, englishAlphabet));

  }

  function subDecoderEncoder(messageArray, messageAlphabet,
                               translationAlphabet) {
    const result = [];
    // check each character, substitute the alternate alphabet, push to result
    messageArray.forEach(character => {
     
      

      const messageAlphabetIndex = messageAlphabet.indexOf(character);
      const translationAlphabetArray = translationAlphabet.split('');
      // if it's a space, just push it on
      if (character === ' ') {
        result.push(character);
      } else {
          try {
            if (messageAlphabetIndex === -1) {
              throw new Error (`'${character}' is not in messageAlphabet`);
            };
            result.push(translationAlphabetArray[messageAlphabetIndex]);
          } catch (err) {
            console.error(err);
          }
      }
    });
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
