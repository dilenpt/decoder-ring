

const polybiusModule = (function () {
  
  const keys = {
    firstKey: key("alpha"),
     secondKey: key("coord"),
  };
 

  
  function polybius(input, encode = true) {
    
    try {
      if (!input.length) throw new Error("input empty!");
      return input
        .split(" ")
        .map((word) => iterate(word, encode, keys))
        .join(" ");
    } catch (error) {
     
      return false; 
    }
  }

 
  function iterate(word, encode, { firstKey, secondKey }) {
   
    if (encode)
      return word
        .toLowerCase()
        .split("")
        .map((letter) => _mapMatrixTo(letter, firstKey, secondKey))
        .join("");

    
    if (word.length % 2 !== 0)
      throw new Error(
        "Polybius coordinates cannot be odd!"
      ); 
    let output = "";
    for (let char = 0; char < word.length; char += 2) {
      const collumn = word[char];
      const row = word[char + 1];
      const code = `${collumn}${row}`;
      output += _mapMatrixTo(code, secondKey, firstKey);
    }
    return output;
  }

  
  function _mapMatrixTo(input, fromKey, toKey) {
    const coordinate =  coordinates(input, fromKey); 
    if (!coordinate) throw new Error(`"${input}" not valid!`); 
    const row = coordinate[0]; 
    const collumn = coordinate[1]; 
    return toKey[row][collumn]; 
  }
  
  function coordinates(input, key) {
    if (input === "i" || input === "j") input = "(i/j)"; 
    for (let r = 0; r < 5; r++)
      for (let c = 0; c < 5; c++) {
        if (key[r][c] === input) return [r, c]; //
      }
    return false; 
  }

 
  function key(type = "first", size = 5) {
    
    const array = [];
    for (let i = 0; i < size; i++) {
      const thisRow = [];
      for (let j = 0; j < size; j++) {
        type === "alpha"
          ? thisRow.push(firstIndex(i, j, size))
          : thisRow.push(secondIndex(i, j));
      }
      array.push(thisRow);
    }
    return array;
  }
  
  function firstIndex(i, j, size) {
    const number = i * size + j; 
    let charCode = number + 97; 
    if (charCode === 105) return "(i/j)"; 
    const shft = charCode > 105 ? 1 : 0; 
    return String.fromCharCode(charCode + shft);
  }
  
  function secondIndex(i,j) {
    return `${j + 1}${i + 1}`;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };