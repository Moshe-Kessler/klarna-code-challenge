/**
 * Takes a string input
 * @param {String} str
 * @returns {String} The first not repeated character or empty string
 */
const firstNonRepeatingLetter = (str) => {
  for (const char of str) {
    const charsArray = str
      .split("")
      .filter((e) => char.toLowerCase() === e.toLowerCase());
    if (charsArray.length === 1) return char;
  }
  return "";
};

module.exports = firstNonRepeatingLetter;
