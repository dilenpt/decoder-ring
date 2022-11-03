

const substitutionModule = (function () {
 
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
 
  function substitution(input, alphabet, encode = true) {
   
    try {
      charletters(alphabet);
      const codeAlph = alphabet.toLowerCase().split("");
      return input
        .toLowerCase() 
        .split("") 
        .map(
          (word) =>
            encode
              ? _mapTo(word, letters, codeAlph) 
              : _mapTo(word, codeAlph, letters ) 
        )
        .join(""); 
    } catch (error) {
      return false; 
    }
  }

  
  
  function _mapTo(input, fromKey, toKey) {
    if (input.match(/\s/)) return input; 
    const index = fromKey.indexOf(input); 
    if (index === -1)
      throw new Error(`${input} not found in alphabet!`); 
    return toKey[index]; 
  }

 
  function charletters(alphabet) {
    if (alphabet.length !== 26)
      throw new Error(`Alphabet must be 26 characters long!`);

    if ([...new Set(alphabet)].length !== alphabet.length)
      throw new Error(`Alphabet cannot repeat`);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
