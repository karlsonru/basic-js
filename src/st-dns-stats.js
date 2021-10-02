import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let obj = {};
  for (let elem of domains) {
    let details = elem.split('.').reverse();
     
    for (let i = 1; i < details.length+1; i++) {  
      let inter = '.' + (details.slice(0, i).join('.')); 

      if (!obj[inter]) {
        obj[inter] = 1;
      } else {
        obj[inter] += 1;
      }
    }
  }
  return obj; 
}
