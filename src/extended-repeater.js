const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes = 1;
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('addition')) options.addition = '';
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';

  let out = '';
  for (let i = 0; i < options.repeatTimes; i++) {
    let add = '';
    if (options.additionRepeatTimes > 0) {
      for (let j = 0; j < options.additionRepeatTimes; j++)
        add += (options.addition + ((j < options.additionRepeatTimes - 1) ? options.additionSeparator : ''));
    }
    out += (str + add + ((i < options.repeatTimes - 1) ? options.separator : ''));
  }
  return out;
}

module.exports = {
  repeater
};
