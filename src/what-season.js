import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const year = {
    'winter' : [0,1,11],
    'spring' : [2,3,4],
    'summer' : [5,6,7],
    'fall' : [8,9,10],
  }

  let month;
  if (date instanceof Date) {
    month = date.getMonth();
  } else if (arguments.length > 1) {
    throw new Error("Invalid date");
  } else {
    return "Unable to determine the time of year!";
  }

  let result;
  for (let season in year) {
    if (year[season].includes(month)) {
      result = season;
      break;
    }
  }

  return result;
}
