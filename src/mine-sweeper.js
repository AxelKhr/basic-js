const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let mines = [];
  for (let i = 0; i < matrix.length; i++) {
    mines[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      mines[i][j] = 0;
    }
  }
  function add(row, col) {
    const beginRow = (row > 0) ? row - 1 : 0;
    const endRow = (row < matrix.length - 1) ? row + 1 : matrix.length - 1;
    const beginCol = (col > 0) ? col - 1 : 0;
    const endCol = (col < matrix[0].length - 1) ? col + 1 : matrix[0].length - 1;
    for (let i = beginRow; i <= endRow; i++) {
      for (let j = beginCol; j <= endCol; j++) {
        if (!((i === row) && (j === col))) {
          mines[i][j]++;
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) add(i, j);
    }
  }
  return mines;
}

module.exports = {
  minesweeper
};
