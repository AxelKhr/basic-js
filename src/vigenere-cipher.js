const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
  }
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ((typeof arguments[0] !== 'string') || (typeof arguments[1] !== 'string')) throw new Error("Incorrect arguments!");
    const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msgArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let msgOut = [];
    let keyInd = 0;
    for (let i = 0; i < msgArr.length; i++) {
      if (alph.indexOf(msgArr[i]) >= 0) {
        msgOut.push(alph[(alph.indexOf(msgArr[i]) + alph.indexOf(keyArr[keyInd % keyArr.length])) % 26]);
        keyInd++;
      }
      else msgOut.push(msgArr[i])
    }
    return this.isDirect ? msgOut.join('') : msgOut.reverse().join('');
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ((typeof arguments[0] !== 'string') || (typeof arguments[1] !== 'string')) throw new Error("Incorrect arguments!");
    const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msgArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let msgOut = [];
    let keyInd = 0;
    for (let i = 0; i < msgArr.length; i++) {
      if (alph.indexOf(msgArr[i]) >= 0) {
        msgOut.push(alph[(26 + alph.indexOf(msgArr[i]) - alph.indexOf(keyArr[keyInd % keyArr.length])) % 26]);
        keyInd++;
      }
      else msgOut.push(msgArr[i])
    }
    return this.isDirect ? msgOut.join('') : msgOut.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
