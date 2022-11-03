

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    try {
      if (!shift || shift < -25 || shift > 25)
        throw new Error("Shift must be between -25 and 25"); 
       shift *= encode ? 1 : -1; 

      return input 
        .toLowerCase()
        .split("")
        .map((char) => charShft(char, shift))
        .join("");
    } catch (error) {
      
      return false; 
    }
  }

  
  function charShft(char, shift) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split(""); 

    if (!char.match(/[a-z]/)) return char; 

    let index = letters.indexOf(char); 
    let shft = (((index + shift) % 26) + 26) % 26; 
    return letters[shft];
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

  