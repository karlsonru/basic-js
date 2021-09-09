import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = (2 ** disksNumber) - 1;

  let turnPerSecond = 3600 / turnsSpeed; 
  let sec = Math.floor(minTurns * turnPerSecond);

  return {
    turns: minTurns,
    seconds: sec,
  }
}
