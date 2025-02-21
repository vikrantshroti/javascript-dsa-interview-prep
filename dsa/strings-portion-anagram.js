/**
 * We have 2 strings, str1 and str2. Find out whether any permutation or combination of character
 * in string can form other string. Also check if sub string of one string is also possible
 * permutation or combination of other string.
 * Input: "rkqodlw", "world". Output: true
 * Input: "rodlw", "world". Output: true
 *
 */
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function canFormString(source, target) {
  const sourceFreq = {};

  for (const char of source) {
    sourceFreq[char] = (sourceFreq[char] || 0) + 1;
  }

  for (const char of target) {
    if (!sourceFreq[char]) {
      return false;
    }
    sourceFreq[char]--;
  }

  return true;
}

function StringChallenge(str1, str2) {
  return (
    cleanString(str1) === cleanString(str2) ||
    canFormString(str1, str2) ||
    canFormString(str2, str1)
  );
}
console.log(StringChallenge("rkqodlw", "world")); // Output: true
console.log(StringChallenge("cedewaraaossooq", "codewars")); // Output:true
console.log(StringChallenge("katas", "steak")); // Output: false
