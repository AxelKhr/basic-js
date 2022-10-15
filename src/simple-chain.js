const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.links.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    (arguments.length === 0) ? this.links.push('') : this.links.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isInteger(position) || (position < 1) || (position > this.links.length)) {
      this.links = [];
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.links.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.links.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const s = this.links.reduce((prev, curr, ind, arr) => {
      return prev + `( ${curr} )` + ((ind < arr.length - 1) ? '~~' : '')
    }, '');
    this.links = [];
    return s;
  }
};

module.exports = {
  chainMaker
};
