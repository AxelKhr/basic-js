const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      let max = 0;
      arr.forEach((el) => {
        const curr = this.calculateDepth(el);
        if (curr > max) max = curr;
      })
      return max + 1;
    }
    else return 0;
  }
}

module.exports = {
  DepthCalculator
};
