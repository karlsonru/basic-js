import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(num) {
  let max = 0;
  for (let i = 0; i < num.toString().length; i++) {
    let current = num.toString().split(''); 
    current.splice(i, 1);
    let res = Number(current.join(''));
    if (res > max) max = res;
  }
  return max;
}
