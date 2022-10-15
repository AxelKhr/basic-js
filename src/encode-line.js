const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return (str.length > 0) ? str.match(/(.{1})\1*/g).map((el) => (el.length > 1) ? el.length.toString() + el[0] : el[0]).join('') : '';
}

module.exports = {
  encodeLine
};
