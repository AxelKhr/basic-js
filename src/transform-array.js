const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  } else {
    let arrOut = [];
    for (let i = 0; i < arr.length; i++) {
      if (['--discard-next', '--discard-prev', '--double-next', '--double-prev'].indexOf(arr[i]) === -1) {
        let arrTemp = [];
        arrTemp.push(arr[i]);
        if (i > 0) {
          if (arr[i - 1] === '--double-next') {
            arrTemp.push(arr[i]);
          } else if (arr[i - 1] === '--discard-next') {
            arrTemp.pop();
          }
        }
        if ((i < arr.length - 1) && (arrTemp.length > 0)) {
          if (arr[i + 1] === '--double-prev') {
            arrTemp.push(arr[i]);
          } else if (arr[i + 1] === '--discard-prev') {
            arrTemp.pop();
          }
        }
        arrOut.push(...arrTemp);
      }
    }
    return arrOut;
  }
}

module.exports = {
  transform
};
