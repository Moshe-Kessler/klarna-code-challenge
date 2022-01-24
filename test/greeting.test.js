const chai = require("chai");
const sayHello = require("../src/greeting");
chai.config.truncateThreshold = 0;

const { assert } = chai;

describe("sayHello", () => {
  it("should say hello", () => {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
  it("should handle blank", () => {
    assert.equal(sayHello(), "Hello there!");
  });
});
