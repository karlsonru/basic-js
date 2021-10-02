import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    constructor() {}
  
    calculateDepth(arr) {
      let max = 0; 
  
      for (let elem of arr) {
        let result = 0;
        if (!Array.isArray(elem)) continue; 
  
        if (elem.length > 0) {
          result += this.calculateDepth(elem);
        } else {
          result += 1;
        }
        if (result > max) max = result; 
      }
  
      return max + 1;
    }
  }
