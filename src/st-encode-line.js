import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let newStr = '';
  let counter = 1;
  for (let i = 1; i < str.length; i++) {
    if (i == str.length - 1) {
      if (str[i-1] == str[i]) {
        counter++;
        newStr += counter + str[i];
      } else {
        newStr += counter > 1 ? counter + str[i-1] + str[i] : str[i-1] + str[i];
      }
      break; 
    }

    if (str[i-1] == str[i]) {
      counter++;
      continue;
    }
    
    // если char at str[i] != char at str[i], то добавляем накопившуюся строку и переводим счётчик на единицу 
    newStr += counter > 1 ? counter + str[i-1] : str[i-1];
    counter = 1;
  }
  return newStr; 
}