const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  } else {
    if ((Object.prototype.toString.call(date) !== '[object Date]')
      || (Object.hasOwn(date, 'getMonth'))
      || (Object.hasOwn(date, 'toString'))) {
      throw new Error("Invalid date!");
    } else {
      const seasons = ['winter', 'spring', 'summer', 'autumn'];
      return seasons[Math.floor(((date.getMonth() + 1) % 12) / 3)];
    }
  }
}

module.exports = {
  getSeason
};
