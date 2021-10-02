import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let storage = {};
  
  for (let char of s1) {
    let pos = (char in storage) ? storage[char] : 0;
    let idx = s2.indexOf(char, pos);
    if (idx > - 1) {
        counter++;
        storage[char] = idx+1;
    }
  }
  return counter;
}
