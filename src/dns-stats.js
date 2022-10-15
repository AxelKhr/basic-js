const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dnsStats = {};
  domains.forEach((el) => {
    let w = el.split('.');
    let dns = '';
    for (let i = w.length - 1; i >= 0; i--) {
      dns += '.' + w[i];
      dnsStats.hasOwnProperty(dns) ? dnsStats[dns] += 1 : dnsStats[dns] = 1;
    }
  });
  return dnsStats;
}

module.exports = {
  getDNSStats
};
