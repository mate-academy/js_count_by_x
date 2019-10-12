'use strict';

/**
 * Implement a function countByX:
 *
 * Function takes two arguments
 * and return a list of length (length) with multiples of (x).
 * Assume both the given number and the number of times to count
 * will be positive numbers greater than 0.
 *
 * countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * countBy(2, 5) === [2, 4, 6, 8, 10]
 *
 * @param {number} x
 * @param {number} length
 *
 * @return {number[]}
 */
function countByX(x, length) {
  const requiredArray = [];
  let countX = x;

  for (let i = 0; i < length; i++) {
    requiredArray.push(countX);
    countX += x;
  }

  return requiredArray;
}

module.exports = countByX;
