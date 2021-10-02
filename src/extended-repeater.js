import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, 
                                 options = {
                                  repeatTimes,
                                  separator,
                                  addition,
                                  additionRepeatTimes,
                                  additionSeparator,
                                }) {
  //let [repeatTimes, separator, addition, additionRepeatTimes, additionSeparator] = [(options.repeatTimes || 1), (options.separator || '+'), (options.addition || ''), (options.additionRepeatTimes || 1), (options.additionSeparator || '|')];
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;                             

  let strWithAddition = str + (additionRepeatTimes > 1 
    ? (addition + additionSeparator)
    .repeat(additionRepeatTimes)
    .slice(0, -additionSeparator.length)  // убираем последний разделитель 
    : addition);  

  if (repeatTimes < 2) return strWithAddition; 

  let strWithRepeat = (strWithAddition + separator).repeat(repeatTimes);

  return strWithRepeat.slice(0, -(separator.length));
}
