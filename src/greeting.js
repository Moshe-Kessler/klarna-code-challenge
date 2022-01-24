/**
 * Simple greeter function
 * @param {String} name
 * @returns {String} "Hello, [name]!" or "Hello there!"
 */
const sayHello = (name) => {
  return name ? `Hello, ${name}!` : "Hello there!";
};

module.exports = sayHello;
