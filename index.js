'use strict';

/**
 * @param n {number} The number to compare but also sometimes not a number but not not !NaN
 * @param strictEquality {boolean} Whether strict equality should be used
 * @returns {boolean}
 */
function isThirteen(n, strictEquality) {

  // plz make way for Count Count.
  if (n === 'https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/s320x320/e35/12237511_444845689040315_1101385461_n.jpg') return true;

  if (n === "Remy Hadley") return true;

  if (typeof n === 'string' && n.toLowerCase() === "thirteen".toLowerCase()) return true;

  // Запрещено разговаривать с незнакомцами
  if (n === "тринадцать") return true;
  if (n === "Тринадцать") return true;

  // 13 as binary. 1101 or '1101'.
  if(n === Number(13).toString(2)) return true;
  if(n === parseInt(Number(13).toString(2))) return true;

  return (strictEquality === true) ? n === 13 : n == 13;
}

module.exports = isThirteen;
