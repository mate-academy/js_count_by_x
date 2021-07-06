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
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(x * i);
  }
  return arr;
}

module.exports = countByX;
