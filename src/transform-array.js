import { NotImplementedError } from '../extensions/index.js';

/**. 
Control sequences are applied from left to right to initial array elements. 
Control sequences do not fall into the transformed array. 
Control sequences in initial array don't occur in a row.  
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next doubles the next element of the array in the transformed array.
--double-prev doubles the previous element of the array in the transformed array.
 *  
 */
export default function transform(arr) {
  throw new NotImplementedError('Not implemented');
}
/*
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  
    // The function must not affect inital array;
  let transformed = arr.map(function(value, idx, arr) {
    if (typeof value === "number") continue;

    let cmd = value.match('double')[0] || value.match('discard')[0];
    let pos = value.match('next')[0] || value.match('prev')[0];

    if (cmd == 'double') makeDouble(pos, idx);
    if (cmd == 'discard') makeDiscard(pos, idx);
  })

  function makeDouble(pos, idx) {
    switch(pos) {
      case 'next':
        if (!checkPos(pos, idx, arr)) break;
        arr.splice(idx+1, 0, arr[idx+1]);
        break;
      case 'prev':
        if (!checkPos(pos, idx, arr)) break;
        arr.splice(idx-1, 0, idx-1);
    }
  } 

  function makeDiscard(pos, idx) {
    switch(pos) {
      case 'next':
        if (!checkPos(pos, idx, arr)) break;
        arr.splice(idx+1, 1);
        break;
      case 'prev':
        if (!checkPos(pos, idx, arr)) break;
        arr.slice(idx-1, 1);
        break;
    }   
  }

  function checkPos(pos, idx, arr) {
    let result = true;
    switch(pos) {
      case "next" && arr.length == idx+1:
        result = false;
        break;
      case "prev" && idx == 0:
        result = false;
        break;
    }
    return result;
  } 
  
  return transformed.filter(num => typeof num == 'number');
}
*/
