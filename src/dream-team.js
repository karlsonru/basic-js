import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let letters = [];
  for (let member of members) {
    if (typeof member !== 'string') continue;
    if (member.trim().length < 1) continue;

    letters.push(member.trim().charAt(0).toUpperCase());
  }

  return (letters.length) ? letters.sort((a, b) => a.localeCompare(b)).join('') : false; 
}
