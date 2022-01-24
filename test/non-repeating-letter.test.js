const chai = require("chai");
const firstNonRepeatingLetter = require("../src/non-repeating-letter");

chai.config.truncateThreshold = 0;

const { assert } = chai;

describe("submission tests", () => {
  it("should handle all repeating strings", () => {
    assert.equal(firstNonRepeatingLetter("STress"), "T");
    assert.equal(firstNonRepeatingLetter("TTT"), "");
    assert.equal(firstNonRepeatingLetter("DDD"), "");
    assert.equal(
      firstNonRepeatingLetter("Is there any not repeating characters?"),
      "y"
    );
  });
  it("should handle simple tests", () => {
    assert.equal(firstNonRepeatingLetter("a"), "a");
    assert.equal(firstNonRepeatingLetter("stress"), "t");
    assert.equal(firstNonRepeatingLetter("moonmen"), "e");
    assert.equal(firstNonRepeatingLetter("abab"), "");
  });
  it("should handle empty strings", () => {
    assert.equal(firstNonRepeatingLetter(""), "");
  });
  it("should handle different cases", () => {
    assert.equal(firstNonRepeatingLetter("Moonlight Sonata"), "M");
    assert.equal(firstNonRepeatingLetter("HELLO HOW IS YOUR WEEKEND"), "I");
    assert.equal(firstNonRepeatingLetter("Sophisticated"), "o");
    assert.equal(firstNonRepeatingLetter("ABAABb"), "");
  });
});
